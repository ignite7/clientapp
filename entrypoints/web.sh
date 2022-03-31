!/bin/bash

set -o errexit
set -o nounset

# Artisan
php artisan config:clear
php artisan route:clear
php artisan cache:clear
php artisan migrate:refresh --seed
php artisan storage:link

# Run
php-fpm
