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
Documentation=https://docs.min.io
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