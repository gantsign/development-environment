#!/bin/bash

set -e

local() {
    bundler install
    bundler exec jekyll clean
    bundler exec jekyll build
    bundler exec jekyll serve --config _config.yml,_config.dev.yml \
      --destination /tmp/_site --detach
    bundler exec htmlproofer /tmp/_site --log-level debug
}

docker_build() {
    docker run --rm -it --volume=$(pwd):/srv/jekyll jekyll/jekyll \
        chpst -u jekyll:jekyll /srv/jekyll/build.sh --local
}

case "$1" in
        --local)
            local
            ;;
        *)
            docker_build
esac
