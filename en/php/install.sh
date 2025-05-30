#!/bin/bash
set -euo pipefail
if [ -z "$1" ]; then
    echo "用法: $0 <platform_name>"
    exit 1
fi
CURRENT_USER=$USER
VERSION="8.4.5"
PLATFORM="$1"
WWW_PATH="/var/www/${PLATFORM}"
NGINX="/etc/nginx/nginx.conf"
NGINX_CONF="/etc/nginx/conf.d/$PLATFORM.conf"
FPM_WWW_CONF="/usr/local/php/etc/php-fpm.d/www.conf"
PHP_INI="/usr/local/php/php.ini"
SERVICE_FILE="/etc/systemd/system/php-fpm.service"
SUPERVISOR_CONF="/etc/supervisor/conf.d/${PLATFORM}.conf"
MARKER="# >>> custom aliases <<<"
if ! grep -q "$MARKER" ~/.bashrc; then
  cat << 'EOF' >> ~/.bashrc

# >>> custom aliases <<<
alias nr='sudo service nginx restart'
alias sb='source ~/.bashrc'
alias gc='git clone'
alias ve='source venv/bin/activate'
alias p='python'
alias vb='vi ~/.bashrc'
EOF
  echo "✅ Aliases added to ~/.bashrc"
else
  echo "ℹ️  Aliases already exist in ~/.bashrc, skipped."
fi
source ~/.bashrc
sudo apt update
if [ ! -d "php-$VERSION" ];then
sudo apt install -y git ccache libjpeg-dev libxml2-dev libgmp-dev libssl-dev pkg-config libpng-dev libfreetype6-dev libonig-dev libzip-dev libsqlite3-dev libcurl4-openssl-dev build-essential libtool autoconf libsodium-dev
wget https://www.php.net/distributions/php-$VERSION.tar.gz
tar -zvxf php-$VERSION.tar.gz
cd php-$VERSION
./configure --prefix=/usr/local/php --with-config-file-path=/usr/local/php  --enable-opcache --enable-bcmath    --enable-fpm     --enable-gd     --with-jpeg     --with-freetype     --enable-mbstring     --with-curl     --with-openssl     --enable-soap     --enable-sockets     --enable-ctype     --enable-sockets     --with-mysqli     --enable-mbregex     --with-pdo-mysql     --with-zlib   --with-zip   --enable-xml  --with-sodium  --enable-bcmath --with-gmp
make -j$(nproc)
sudo make install
sudo cp /usr/local/php/etc/php-fpm.conf.default /usr/local/php/etc/php-fpm.conf
sudo tee -a "$FPM_WWW_CONF" > /dev/null << 'EOF'
[www]
user = www
group = www
listen = /usr/local/php/php8-fpm.sock
listen.owner = www
listen.group = www
listen.mode = 0660
pm = dynamic

pm.max_children = 32
pm.start_servers = 4
pm.min_spare_servers = 2
pm.max_spare_servers = 8
pm.max_requests = 500

slowlog = /usr/local/php/php-slow.log
request_slowlog_timeout = 5s
request_terminate_timeout = 30s
access.log = /usr/local/php/www-access.log
access.format = "%R - %u %t \"%m %r\" %s %f %{mili}d %{kilo}M %C%%"
catch_workers_output = yes
EOF
echo 'export PATH=/usr/local/php/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
sudo ln -s /usr/local/php/bin/php /usr/bin/php
sudo tee -a "$PHP_INI" > /dev/null << 'EOF'
[PHP]
error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT
display_errors = Off
log_errors = On
error_log = /var/log/php-fpm/run-errors.log
expose_php = Off
max_execution_time = 30
memory_limit = 512M
output_buffering = 4096
file_uploads = On
upload_max_filesize = 512M
post_max_size = 512M
date.timezone = Asia/Shanghai
[extension]

[opcache]
zend_extension=opcache.so
opcache.enable = 1
opcache.enable_cli = 0
opcache.memory_consumption = 128
opcache.interned_strings_buffer = 8
opcache.max_accelerated_files = 10000
opcache.revalidate_freq = 60
opcache.validate_timestamps = 0
opcache.fast_shutdown = 1
opcache.save_comments = 1
opcache.enable_file_override = 1
default_charset = "UTF-8"
max_input_vars = 1000
post_max_size = 512M
EOF
fi
if [ ! -f "$SERVICE_FILE" ];then
sudo tee "$SERVICE_FILE" > /dev/null << 'EOF'
[Unit]
Description=The PHP FastCGI Process Manager
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/php/sbin/php-fpm --php-ini /usr/local/php/php.ini --nodaemonize --fpm-config /usr/local/php/etc/php-fpm.conf
ExecReload=/bin/kill -USR2 \$MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
EOF
fi
sudo systemctl daemon-reload
sudo systemctl enable php-fpm.service
sudo systemctl start php-fpm.service
sudo apt install nginx -y
sudo bash -c "cat > '$NGINX'" <<EOF
user $CURRENT_USER;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
    worker_connections 10240;
    multi_accept on;
    use epoll;
}

http {
    ##
    # 基础设置
    ##
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    ##
    # 日志配置
    ##
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log warn;

    ##
    # Gzip 压缩
    ##
    gzip on;
    gzip_disable "msie6";
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    ##
    # 缓存优化
    ##
    open_file_cache max=1000 inactive=20s;
    open_file_cache_valid 30s;
    open_file_cache_min_uses 2;
    open_file_cache_errors on;

    ##
    # 上传文件大小限制
    ##
    client_max_body_size 1024M;

    ##
    # 虚拟主机配置
    ##
    include /etc/nginx/conf.d/*.conf;
}
EOF
sudo bash -c "cat > '$NGINX_CONF'" <<EOF
server {
    listen 80;
    server_name $PLATFORM.com;
    return 301 http://www.$PLATFORM.com\$request_uri;
}

server {
    root /var/www/$PLATFORM/shop/public;
    index index.php index.html index.htm;
    location / {
         try_files \$uri \$uri/ /index.php?\$query_string;
    }

    location ~ \.php$ {
        add_header X-XSS-Protection "1; mode=block";
        add_header X-Content-Type-Options nosniff;
        add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; preload";
        add_header Referrer-Policy "strict-origin-when-cross-origin";
        add_header X-Permitted-Cross-Domain-Policies none;
        add_header X-Download-Options noopen;
        try_files \$uri /index.php =404;
        fastcgi_pass unix:/usr/local/php/php8-fpm.sock;
        fastcgi_index index.php;
        fastcgi_buffers 16 16k;
        fastcgi_buffer_size 32k;
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
        #fixes timeouts
        fastcgi_read_timeout 600;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
    access_log  /var/log/nginx/$PLATFORM-access.log;
    error_log  /var/log/nginx/$PLATFORM-error.log;

    listen 80;
    server_name www.$PLATFORM.com api.$PLATFORM.com chun.$PLATFORM.com seller.$PLATFORM.com item.$PLATFORM.com crop.$PLATFORM.com shop.$PLATFORM.com jishi.$PLATFORM.com tdd.$PLATFORM.com;

}
EOF
sudo systemctl enable nginx
sudo systemctl restart nginx
sudo apt install supervisor -y
sudo bash -c "cat > '$SUPERVISOR_CONF'" <<EOF
[program:${PLATFORM}-shop]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/${PLATFORM}/shop/artisan queue:work
autostart=true
autorestart=true
user=www
numprocs=2
redirect_stderr=true
stdout_logfile=/var/log/supervisor/${PLATFORM}-worker.log
EOF
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
sudo mv composer.phar /usr/local/bin/composer
cd "$WWW_PATH/shop"
composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist
php artisan config:cache
php artisan route:cache
#sudo supervisorctl reread
#sudo supervisorctl update
#sudo systemctl enable supervisor
rm -f composer-setup.php php-$VERSION.tar.gz
php -v