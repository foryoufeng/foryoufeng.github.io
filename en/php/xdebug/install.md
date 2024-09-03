# install xdebug

* install in mac

```
arch -x86_64 sudo pecl install xdebug
```

* config php

```
cd /usr/local/etc/php/8.2/conf.d
vi xdebug.ini
```

* add config ini

```
[xdebug]
zend_extension="/usr/local/Cellar/php@8.2/8.2.20_1/pecl/20220829/xdebug.so"
xdebug.mode=debug
xdebug.client_host=127.0.0.1
xdebug.client_port=9003
xdebug.log="/tmp/xdebug.log"
```

* see debug can use

```
php -v
// if yuo can see xdebug
```