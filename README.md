# Khoj Landing Page
[Khoj](https://github.com/debanjum/khoj) is an AI personal assistant for your digital brain.

This repository holds the code for its landing page.

## Deveopment

### Setup
1. Clone the repository `git clone git@github.com:khojai/landing-page.git`
2. Install dependencies `yarn install`

## Start the Server
1. Run `yarn start`

## Linter
1. Run `yarn eslint .`

## Run the docker image
1. Run `docker build -t khojai/landing_page .`
2. Run `docker run -p 127.0.0.1:3000:80/tcp khojai/landing_page`
3. Open `http://localhost:3000` in your browser