git pull origin master
composer install --no-dev
php artisan migrate --force
php artisan db:seed --force
php artisan route:cache