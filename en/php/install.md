# install php

## ubuntu 

* remove apache2
```
sudo systemctl stop apache2
sudo systemctl disable apache2
sudo apt remove apache2 -y
sudo apt purge apache2 -y
sudo apt autoremove -y
sudo apt remove apache2-bin
```

```
sudo apt install php php-common php-mysql php-gd php-json php-zip php-mbstring php-bcmath  php-gmp php-fpm php-curl php-pgsql php-pear php-xml {cgi,intl,zip} -y
```

* if need xdebug
```
sudo apt-get install php-xdebug
```

install dev

```
sudo apt-get install php8.3-dev
```

install ssh2

```
sudo pecl channel-update pecl.php.net
pecl install ssh2
```

restart

```
sudo systemctl restart php8.3-fpm.service
```

## php source install 

install dependent
```sh
sudo apt install -y ccache libjpeg-dev libxml2-dev libssl-dev  libpng-dev libfreetype6-dev libonig-dev libzip-dev libsqlite3-dev libcurl4-openssl-dev build-essential libtool autoconf libsodium-dev
```

compile php

```sh
wget https://www.php.net/distributions/php-8.3.14.tar.gz
tar -xvjf php-8.3.14.tar.gz
cd php-8.3.14
//one command to compile
./configure --prefix=/usr/local/php --with-config-file-path=/usr/local/php  --enable-opcache --enable-bcmath    --enable-fpm     --enable-gd     --with-jpeg     --with-freetype     --enable-mbstring     --with-curl     --with-openssl     --enable-soap     --enable-sockets     --enable-ctype     --enable-sockets     --with-mysqli     --enable-mbregex     --with-pdo-mysql     --with-zlib   --with-zip   --enable-xml  --with-sodium   --with-openssl
//multiple line compile
./configure \
    --prefix=/usr/local/php \
    --with-config-file-path=/usr/local/php \
    --enable-bcmath \
    --enable-fpm \
    --enable-gd \
    --with-jpeg \
    --with-freetype \
    --enable-mbstring \
    --with-curl \
    --with-openssl \
    --enable-soap \
    --enable-sockets \
    --enable-ctype \
    --enable-sockets \
    --with-mysqli \
    --enable-mbregex \
    --with-pdo-mysql \
    --with-zlib \
    --with-sodium \
    --with-zip \
    --enable-xml \
    --with-openssl
    
make -j$(nproc)
sudo make install
sudo cp php.ini-production /usr/local/php/php.ini
sudo cp /usr/local/php/etc/php-fpm.conf.default /usr/local/php/etc/php-fpm.conf
sudo cp /usr/local/php/etc/php-fpm.d/www.conf.default /usr/local/php/etc/php-fpm.d/www.conf
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
user = wuqiang 
group = wuqiang

listen = /usr/local/php/php8.3-fpm.sock
listen.owner = wuqiang 
listen.group = wuqiang 
listen.mode = 0660 
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

add opcache

```sh
[opcache]
zend_extension=opcache.so
opcache.enable=1
opcache.enable_cli=1
opcache.memory_consumption=128
opcache.interned_strings_buffer=8
opcache.max_accelerated_files=10000
opcache.revalidate_freq=2
opcache.fast_shutdown=1

```