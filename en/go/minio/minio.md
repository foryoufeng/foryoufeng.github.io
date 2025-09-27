# minio

install
```sh
wget https://dl.min.io/server/minio/release/linux-amd64/minio
chmod +x minio
sudo mv minio /usr/local/bin/minio
sudo minio server /data
```

add service 
```sh
sudo vi /etc/systemd/system/minio.service

```

set content
```sh
[Unit]
Description=MinIO Object Storage
Wants=network-online.target
After=network-online.target

[Service]
User=minio
Group=minio
ExecStart=/usr/local/bin/minio server /data --address ":9000" --console-address ":9001"
Restart=always
LimitNOFILE=65536
Environment="MINIO_ROOT_USER=minioadmin"
Environment="MINIO_ROOT_PASSWORD=minioadmin"
Environment="MINIO_SERVER_URL=http://s3.dv"
Environment="MINIO_BROWSER_REDIRECT_URL=http://console.s3.dv"

[Install]
WantedBy=multi-user.target

```

create user
```sh
sudo useradd -r minio --shell /sbin/nologin
sudo mkdir -p /data
sudo chown -R minio:minio /data
```

start service
```sh
sudo systemctl daemon-reload
sudo systemctl enable minio
sudo systemctl start minio
```

nginx config
```sh
server {
    listen 80;
    server_name s3.dv;

    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name console.s3.dv;

    location / {
        proxy_pass http://127.0.0.1:9001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```