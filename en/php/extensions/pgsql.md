# install

```sh
sudo apt update
sudo apt install libpq-dev
cd ext/pdo_pgsql
phpize
./configure
re2c -o pgsql_sql_parser.c pgsql_sql_parser.re
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