#!/bin/bash

# 检查是否提供了至少一个参数
if [ -z "$1" ]; then
    echo "Usage: $0 domain [project_path]"
    exit 1
fi

# 获取参数
DOMAIN="$1"

# 如果第二个参数为空，则使用当前目录
if [ -z "$2" ]; then
    ROOT_PATH=$(pwd)
else
    ROOT_PATH="$2"
fi

# 设置nginx的conf.d目录（可根据实际情况修改路径）
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
    root "$ROOT_PATH/dist/";
    index index.html;
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?|ttf|map)$ {
        try_files \$uri =404;
        access_log off;
        expires 7d;
        add_header Cache-Control "public";
    }
    location / {
       try_files \$uri \$uri/ /index.html;
    }
}
EOF

# 检查是否成功创建配置文件
if [ ! -f "$CONF_FILE" ]; then
    echo "Failed to create $CONF_FILE!"
    exit 1
fi

cat "$CONF_FILE"

# 重启Nginx服务
sudo systemctl restart nginx

echo "Nginx has been restarted success"