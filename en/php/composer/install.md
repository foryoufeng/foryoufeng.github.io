# composer 

## install

```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
sudo mv composer.phar /usr/local/bin/composer
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

## fetch by aliyun or tencent

```sh
wget https://mirrors.tencent.com/composer/composer.phar
wget https://mirrors.aliyun.com/composer/composer.phar
mv composer.phar  /usr/local/bin/composer
```


### add composer bin to `PATH`

```
# where is composer
composer global config bin-dir --absolute
vi ~/.bashrc
# add config
export PATH="$PATH:$HOME/.config/composer/vendor/bin"
# reload shell
source ~/.bashrc
```

### composer save path

```
cd /home/wuqiang/.cache/composer/repo/https---mirrors.aliyun.com-composer
```
