FROM jekyll/jekyll:latest

RUN \
  apk --update add zlib-dev build-base libxml2-dev libxslt-dev readline-dev \
    libffi-dev ruby-dev yaml-dev zlib-dev libxslt-dev readline-dev libxml2-dev \
    libffi-dev ruby-dev yaml-dev zlib libxml2 build-base ruby-io-console readline \
    libxslt ruby yaml libffi nodejs ruby-irb ruby-json ruby-rake ruby-rdoc && \

  # GitHub pages has native dependencies that require compilation
  yes | gem install github-pages -v 115 && \

  # GitHub pages needs json 1.8.6
  yes | gem install json -v 1.8.6 && \

  # GitHub pages needs ffi 1.9.17
  yes | gem install ffi -v 1.9.17 && \

  apk del zlib-dev build-base libxml2-dev libxslt-dev readline-dev libffi-dev \
    ruby-dev yaml-dev zlib-dev libxslt-dev readline-dev libxml2-dev \
    libffi-dev ruby-dev yaml-dev zlib libxml2 build-base && \
  docker-helper cleanup
