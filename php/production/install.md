# ubuntu 

```sh
sudo apt install -y ccache libjpeg-dev libxml2-dev libssl-dev  libpng-dev libfreetype6-dev libonig-dev libzip-dev libsqlite3-dev libcurl4-openssl-dev build-essential libtool autoconf libsodium-dev
sudo apt install php8.3  php8.3-fpm php8.3-common php8.3-mysql php8.3-gd php8.3-mbstring php8.3-bcmath php8.3-gmp php8.3-curl php8.3-xml php8.3-cgi php8.3-zip php8.3-intl -y
sudo systemctl restart php8.3-fpm.service
sudo systemctl enable php8.3-fpm.service
```

edit config

```sh
sudo vi /etc/php/8.3/fpm/pool.d/www.conf

user = www
group = www

listen = 127.0.0.1:9000
listen.owner = www
listen.group = www
```