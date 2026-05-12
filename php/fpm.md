# php-fpm

## mac

```
cd /usr/local/etc/php/8.2/php-fpm.d
//see if listen=127.0.0.1:9000
cat www.conf 
ps aux | grep php-fpm
// check if php is listening 9000
sudo lsof -i :9000
netstat -an | grep 9000
// see php-fpm is running
ps aux | grep php-fpm

```
