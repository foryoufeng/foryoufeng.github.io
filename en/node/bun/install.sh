if [ -z "$1" ]; then
    echo "Usage: $0 git domain"
    exit 1
fi
if command -v bun >/dev/null 2>&1; then
    echo "✅ bun is installed: $(bun --version)"
else
    wget https://testcdn.ibisaas.com/2025/6/13/bun-linux-x64_1749794876161.zip
    sudo apt install unzip -y
    install_dir=${!install_env:-$HOME/.bun}
    bin_dir=$install_dir/bin
    exe=$bin_dir/bun

    if [[ ! -d $bin_dir ]]; then
        mkdir -p "$bin_dir" ||
            error "Failed to create install directory \"$bin_dir\""
    fi

    unzip -oq "bun-linux-x64_1749794876161.zip" -d ~/.bun/
    mv ~/.bun/bun-linux-x64/bun ~/.bun/bin/
    echo 'export PATH="~/.bun/bin:$PATH"' >> ~/.bashrc
    source ~/.bashrc
    rm -rf bun-linux-x64_1749794876161.zip
    echo "✅ bun installed success: $(bun --version)"
fi
cd /var/www || exit
REPO_URL="$1"
DOMAIN="$2"

PROJECT_NAME=$(basename "$REPO_URL" .git)
if [[ ! -d $bin_dir ]]; then
  git clone "$REPO_URL"
fi
cd "$PROJECT_NAME"  || exit
if [ ! -f ".env" ]; then
cp .env.example .env
fi
composer install --no-dev
NGINX_CONF_DIR="/etc/nginx/conf.d"
CONF_FILE="$NGINX_CONF_DIR/$DOMAIN.conf"
# 检查是否已经存在同名的conf文件
if [ -f "$CONF_FILE" ]; then
    echo "The virtual host configuration file $CONF_FILE already exists!"
    exit 1
fi
# 创建Nginx虚拟主机配置文件
sudo tee "$CONF_FILE" > /dev/null <<EOF
server {
    listen 80;

    server_name $DOMAIN;
    client_max_body_size 50m;
    root "$ROOT_PATH/public";
    index index.html index.php;

    location / {
        try_files \$uri \$uri/ /index.php?\$query_string;
    }

    location ~ \.php\$ {
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
}
EOF

# 检查是否成功创建配置文件
if [ ! -f "$CONF_FILE" ]; then
    echo "Failed to create $CONF_FILE!"
    exit 1
fi

echo "Nginx configuration file $CONF_FILE created success"

# 重启Nginx服务
sudo systemctl restart nginx

echo "Nginx has been restarted success"

