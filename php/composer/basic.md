# basic

1.install

```sh
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
sudo mv composer.phar /usr/local/bin/composer
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

2.compare with npm,rust 

3. basic use
```sh
composer install
composer install --no-dev
composer require 
composer update
composer remove
```

in production run
```sh
composer install --no-dev -a
```

4.make your own package and push it to github


5.view source code