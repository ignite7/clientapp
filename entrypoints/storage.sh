#!/bin/bash

set -o errexit
set -o nounset

docker exec -it web bash -c "cd public && ln -s ../storage/app/public storage"

