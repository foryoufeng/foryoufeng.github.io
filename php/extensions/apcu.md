# install apcu

get apcu source code and compile

```sh
wget https://pecl.php.net/get/apcu-5.1.24.tgz
tar -zvxf apcu-5.1.24.tgz
cd apcu-5.1.24
phpize
./configure
make 
sudo make install
```

config php.ini

```sh
vi /usr/local/php/php.ini
# add extension
extension=apcu.so
```

see if extension  install
```sh
php -i|grep apcu
```