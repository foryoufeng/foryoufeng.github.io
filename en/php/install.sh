#!/bin/bash
CURRENT_USER=$USER

# 定义源文件和目标文件路径
SOURCE="/usr/local/php/etc/php-fpm.conf.default"
TARGET="/usr/local/php/etc/php-fpm.conf"
WWW_CONF="/usr/local/php/etc/php-fpm.d/www.conf"
PHP_INI="/usr/local/php/php.ini"
SERVICE_FILE="/etc/systemd/system/php-fpm.service"

sudo apt install -y ccache libjpeg-dev libxml2-dev libssl-dev pkg-config libpng-dev libfreetype6-dev libonig-dev libzip-dev libsqlite3-dev libcurl4-openssl-dev build-essential libtool autoconf libsodium-dev
wget https://www.php.net/distributions/php-8.4.5.tar.gz
tar -zvxf php-8.4.5.tar.gz
cd php-8.4.5
./configure --prefix=/usr/local/php --with-config-file-path=/usr/local/php  --enable-opcache --enable-bcmath    --enable-fpm     --enable-gd     --with-jpeg     --with-freetype     --enable-mbstring     --with-curl     --with-openssl     --enable-soap     --enable-sockets     --enable-ctype     --enable-sockets     --with-mysqli     --enable-mbregex     --with-pdo-mysql     --with-zlib   --with-zip   --enable-xml  --with-sodium   --with-openssl
make -j$(nproc)
sudo make install
sudo cp php.ini-production /usr/local/php/php.ini
sudo cp /usr/local/php/etc/php-fpm.conf.default /usr/local/php/etc/php-fpm.conf
sudo cp /usr/local/php/etc/php-fpm.d/www.conf.default /usr/local/php/etc/php-fpm.d/www.conf
sudo sed -i "s/user = .*/user = $CURRENT_USER/" "$WWW_CONF"
sudo sed -i "s/group = .*/group = $CURRENT_USER/" "$WWW_CONF"
sudo sed -i 's|listen = .*|listen = /usr/local/php/php8.3-fpm.sock|' "$WWW_CONF"
sudo sed -i "s/;listen.owner = .*/listen.owner = $CURRENT_USER/" "$WWW_CONF"
sudo sed -i "s/;listen.group = .*/listen.group = $CURRENT_USER/" "$WWW_CONF"
sudo sed -i 's/;listen.mode = .*/listen.mode = 0660/' "$WWW_CONF"
echo 'export PATH=/usr/local/php/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
sudo ln -s /usr/local/php/bin/php /usr/bin/php
sudo tee -a "$PHP_INI" > /dev/null << 'EOF'

[opcache]
zend_extension=opcache.so
opcache.enable=1
opcache.enable_cli=1
opcache.memory_consumption=128
opcache.interned_strings_buffer=8
opcache.max_accelerated_files=10000
opcache.revalidate_freq=2
opcache.fast_shutdown=1
EOF
sudo bash -c "cat > '$SERVICE_FILE' << 'EOF'
[Unit]
Description=The PHP FastCGI Process Manager
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/php/sbin/php-fpm --php-ini /usr/local/php/php.ini --nodaemonize --fpm-config /usr/local/php/etc/php-fpm.conf
ExecReload=/bin/kill -USR2 $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
EOF"
sudo systemctl daemon-reload
sudo systemctl enable php-fpm.service
sudo systemctl start php-fpm.service
php -v