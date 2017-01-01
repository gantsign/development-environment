FROM jekyll/jekyll:latest

RUN \
  apk --update add zlib-dev build-base libxml2-dev libxslt-dev readline-dev \
    libffi-dev ruby-dev yaml-dev zlib-dev libxslt-dev readline-dev libxml2-dev \
    libffi-dev ruby-dev yaml-dev zlib libxml2 build-base ruby-io-console readline \
    libxslt ruby yaml libffi nodejs ruby-irb ruby-json ruby-rake ruby-rdoc && \

  # GitHub pages requires 1.7.0 rather than 1.6.8
  yes | gem install nokogiri -v 1.7.0 && \

  apk del zlib-dev build-base libxml2-dev libxslt-dev readline-dev libffi-dev \
    ruby-dev yaml-dev zlib-dev libxslt-dev readline-dev libxml2-dev \
    libffi-dev ruby-dev yaml-dev zlib libxml2 build-base && \
  docker-helper cleanup
