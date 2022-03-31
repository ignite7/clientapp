#!/bin/sh

set -o errexit
set -o nounset

composer install
npm i
npm run dev
mkdir tests/Unit
docker-compose up -d
