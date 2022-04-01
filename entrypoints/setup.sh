#!/bin/sh

set -o errexit
set -o nounset

composer install
npm i
npm run dev
docker-compose up -d
