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
