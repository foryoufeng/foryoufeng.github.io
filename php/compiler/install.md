# install

install need package

```sh
wget https://www.php.net/distributions/php-8.3.14.tar.gz
tar -zxvf php-8.3.14.tar.gz
cd php-8.3.14
sudo apt update
sudo apt install -y pkg-config build-essential autoconf bison re2c
```

Generate configure:
```sh
./buildconf
./configure --prefix=/home/wuqiang/Documents/php/php-src/Release --with-config-file-path=/home/wuqiang/Documents/php/php-src/Release --enable-bcmath  --enable-fpm   --enable-mbstring  --with-curl --with-openssl --enable-soap --enable-ctype  --enable-sockets --with-pdo-mysql  --with-zlib   --with-zip   --enable-xml --enable-pcntl --with-sodium 
make -j$(nproc)
sudo make install
sudo cp php.ini-production Release/php.ini
sudo cp Release/etc/php-fpm.conf.default Release/etc/php-fpm.conf
sudo cp Release/etc/php-fpm.d/www.conf.default Release/etc/php-fpm.d/www.conf
sudo Release/sbin/php-fpm --php-ini Release/php.ini --nodaemonize --fpm-config Release/etc/php-fpm.conf 
```

only compile cli
```sh
./configure  --prefix=/home/wuqiang/Documents/php/php-src/Release --enable-cli  --disable-all
make -j$(nproc) sapi/cli/php
```

/home/wuqiang/Documents/php/php-src/Release/php.sock



cli compile
```sh
y buildconf.y
./configure --prefix=/home/wuqiang/Documents/php/php-src/Release
make -j$(nproc)
sudo make install
```

test
```sh
y /home/wuqiang/Documents/php/php-src/tests/vendor/bin/pest --configuration /home/wuqiang/Documents/php/php-src/tests/phpunit.xml /home/wuqiang/Documents/php/php-src/tests/src/basic/OperateTest.y
```

```sh
wget https://www.php.net/distributions/php-8.3.14.tar.gz
tar -zxvf php-8.3.14.tar.gz
cd php-8.3.14
//one command to compile
./configure --prefix=/home/wuqiang/Documents/php/php-src/Release --with-config-file-path=/home/wuqiang/Documents/php/php-src/Release  --enable-opcache --enable-bcmath  --enable-fpm   --enable-mbstring     --with-curl     --with-openssl --enable-soap --enable-sockets --enable-ctype  --enable-sockets --with-pdo-mysql  --with-zlib   --with-zip   --enable-xml --enable-pcntl --with-sodium 
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
sudo vi /usr/local/php/php.ini
```
add config
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
opcache.validate_timestamps=0
```

ini config
```sh
vi /usr/local/php/php.ini
upload_max_filesize = 500M
memory_limit  = 500M
post_max_size = 1024M
sudo systemctl restart php-fpm
```