#!/bin/sh

set -o errexit
set -o nounset

sudo python3 entrypoints/delete_db.py
docker-compose build
