# install php

## php source install 

install dependent
```sh
sudo apt install -y libgmp-dev ccache libjpeg-dev libxml2-dev libssl-dev  libpng-dev libfreetype6-dev libonig-dev libzip-dev libsqlite3-dev libcurl4-openssl-dev build-essential libtool autoconf libsodium-dev
```

compile php

```sh
wget https://www.php.net/distributions/php-8.4.5.tar.gz
tar -zxvf php-8.4.5.tar.gz
cd php-8.4.5
./configure --prefix=/usr/local/php --with-config-file-path=/usr/local/php  --enable-opcache --enable-bcmath  --enable-fpm  --enable-gd --with-jpeg --with-freetype --enable-mbstring     --with-curl     --with-openssl     --enable-soap --enable-sockets --enable-ctype     --enable-mbregex     --with-pdo-mysql     --with-zlib   --with-zip   --enable-xml --enable-pcntl --with-sodium   --with-openssl
make -j$(nproc)
sudo make install
sudo cp /usr/local/php/etc/php-fpm.conf.default /usr/local/php/etc/php-fpm.conf
echo 'export PATH=/usr/local/php/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
php -m | grep -E 'PDO|xml'
sudo ln -s /usr/local/php/bin/php /usr/bin/php
php -v
```

## php-fpm

config php-fpm

```sh
sudo vi /usr/local/php/etc/php-fpm.d/www.conf
```

change config and save

```sh
user = www 
group = www

listen = /usr/local/php/php-fpm.sock
listen.owner = www 
listen.group = www 
listen.mode = 0660 
```

add php.ini

```sh
sudo vi /usr/local/php/php.ini
```
add config
```sh
[PHP]
error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT
display_errors = Off
log_errors = On
error_log = /var/log/php-fpm/run-errors.log
expose_php = Off
max_execution_time = 30
memory_limit = 512M
output_buffering = 4096
file_uploads = On
upload_max_filesize = 512M
max_file_uploads = 100
post_max_size = 512M
date.timezone = Asia/Shanghai
[extension]

[opcache]
opcache.enable = 1
opcache.enable_cli = 0
opcache.memory_consumption = 128
opcache.interned_strings_buffer = 8
opcache.max_accelerated_files = 10000
opcache.revalidate_freq = 2
opcache.fast_shutdown = 1
opcache.save_comments = 1
opcache.enable_file_override = 1
default_charset = "UTF-8"
max_input_vars = 1000
post_max_size = 512M
```

add Systemd Service

```sh
sudo vi /etc/systemd/system/php-fpm.service
```

add configuration to the service file

```sh
[Unit]
Description=The PHP FastCGI Process Manager
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/php/sbin/php-fpm --php-ini /usr/local/php/php.ini --nodaemonize --fpm-config /usr/local/php/etc/php-fpm.conf 
ExecReload=/bin/kill -USR2 $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target


```

enable and start the service 

```sh
sudo systemctl daemon-reload
sudo systemctl restart php-fpm
sudo systemctl enable php-fpm
```

see if php-fpm is start
```sh
sudo systemctl status php-fpm
sudo systemctl list-units --type=service --state=active |grep php
```
