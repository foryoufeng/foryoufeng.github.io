# install

```sh
wget https://pecl.php.net/get/ssh2-1.4.1.tgz
tar -zvxf ssh2-1.4.1.tgz
cd ssh2-1.4.1
phpize
./configure
make 
sudo make install
```

config php.ini

```sh
vi /usr/local/php/php.ini
# add extension
extension=ssh2.so
```

see if extension  install
```sh
php -i|grep ssh2
```