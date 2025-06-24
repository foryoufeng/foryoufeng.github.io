cd /var/www/laravel-esports
git pull origin master
composer install --no-dev
php artisan route:cache
php artisan migrate --force
php artisan db:seed --force
/home/www/.bun/bin/bun install
/home/www/.bun/bin/bun run build