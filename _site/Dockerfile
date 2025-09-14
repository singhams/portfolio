# filepath: /Users/saraingham/portfolio/Dockerfile

FROM jekyll/jekyll:latest

WORKDIR /srv/jekyll
COPY . .
RUN bundle install
CMD ["jekyll", "serve", "--host", "0.0.0.0"]