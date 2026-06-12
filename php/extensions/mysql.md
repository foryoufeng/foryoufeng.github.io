# install

```sh
sudo apt update
sudo apt install ibmysqlclient-dev
cd ext/pdo_mysql
phpize
./configure \
  --with-php-config=/home/wuqiang/Documents/c/php-src/Release/bin/php-config \
  --with-pdo-mysql=mysqlnd
make 
sudo make install
```

config php.ini

```sh
sudo vi /usr/local/php/php.ini
# add extension
extension=pdo_pgsql
```

see if extension  install
```sh
php -m|grep pgsql
```