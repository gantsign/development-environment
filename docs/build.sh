#!/bin/bash

set -e

local() {
    bundler install
    bundler exec ${BASH_SOURCE[0]} --run
}

run() {
    jekyll clean
    jekyll build
    # jekyll serve --detatch has a bug where it tries to start twice and fails
    # due to the port in use, so we fork and wait for the port to be available
    # instead.
    jekyll serve --config _config.yml,_config.dev.yml \
      --destination /tmp/_site &
    while ! netstat -tna | grep 'LISTEN\>' | grep -q ':4000\>'; do
        sleep 1
    done
    for i in {1..3}; do
        htmlproofer /tmp/_site --log-level debug \
            --swap-urls "^/development-environment:" \
            --ignore-urls '//www.xfce.org,//mademistakes.com/,//kompose.io/,//twitter.com/,//github.com/gantsign/development-environment/pull/' \
            --ignore-status-codes 307 \
            --no-enforce-https \
            && s=0 && break || s=$? && sleep 60
    done
    (exit $s)
}

docker_build() {
    docker run --rm "--volume=$(pwd):/srv/jekyll" jekyll/jekyll:4.2.2 \
        /srv/jekyll/build.sh --run
}

publish_git() {
    REPO_URL="https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/gantsign/development-environment.git"
    CI_USER=$USER
    sudo chown -R "$CI_USER" .
    git init
    git fetch --depth=1 $REPO_URL \
      refs/heads/gh-pages:refs/remotes/origin/gh-pages
    git symbolic-ref HEAD refs/heads/gh-pages
    git reset --mixed origin/gh-pages
    git add --all -v .
    # Don't push if there are no changes or if only the feed.xml has changed
    if output=$(git status --porcelain) \
            && ([ -z "$output" ] || [ "$output" = ' M feed.xml' ]); then

        echo 'No changes to push.'
    else
        git commit -F- <<'MSG'
Pushed documentation update from master
MSG
        git push $REPO_URL gh-pages:gh-pages
    fi
}

publish() {
    (cd _site && publish_git)
}

case "$1" in
        --local)
            local
            ;;
        --run)
            run
            ;;
        --publish)
            publish
            ;;
        *)
            docker_build
esac
