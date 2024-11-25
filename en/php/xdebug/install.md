# install xdebug

install in mac

```
arch -x86_64 sudo pecl install xdebug
```
install in ubuntu

```sh
sudo apt-get install php-xdebug
```

config php

```
//find ini location
php -i|grep ini 
cd /usr/local/etc/php/8.2/conf.d
vi xdebug.ini
```

add config ini

```
[xdebug]
zend_extension=xdebug.so
xdebug.mode=debug
xdebug.client_host=127.0.0.1
xdebug.client_port=9003
xdebug.log="/tmp/xdebug.log"
```

see debug can use

```sh
php -v
// if yuo can see xdebug
PHP 8.3.6 (cli) (built: Jun 13 2024 15:23:20) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.3.6, Copyright (c) Zend Technologies
    with Zend OPcache v8.3.6, Copyright (c), by Zend Technologies
    with Xdebug v3.2.0, Copyright (c) 2002-2022, by Derick Rethans
```

config xdebug

* 1.install xdebug extensiton in chrome https://chromewebstore.google.com/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc

* 2.open xdebug and config IDE key = PhpStorm


## source code install xdebug

```sh
sudo apt install -y autoconf
export PHP_AUTOCONF=$(which autoconf)
echo "export PHP_AUTOCONF=$(which autoconf)" >> ~/.bashrc
source ~/.bashrc
wget https://xdebug.org/files/xdebug-3.1.5.tgz
tar -xvzf xdebug-3.1.5.tgz
cd xdebug-3.1.5
```

compile xdebug

```sh
phpize
./configure
make -j$(nproc)
sudo make install
```

add config to php.ini
```sh
[xdebug]
zend_extension=xdebug.so
xdebug.mode=debug                 
xdebug.start_with_request=yes      
xdebug.client_host=127.0.0.1
xdebug.client_port=9003
```
  