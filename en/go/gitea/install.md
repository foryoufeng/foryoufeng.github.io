# install

use postgres
```sh
su -c "psql" - postgres
CREATE ROLE gitea WITH LOGIN PASSWORD 'gitea';
CREATE DATABASE giteadb WITH OWNER gitea TEMPLATE template0 ENCODING UTF8 LC_COLLATE 'en_US.UTF-8' LC_CTYPE 'en_US.UTF-8';

```

set `pg_hba.conf`

```sh
sudo vi /etc/postgresql/15/main/pg_hba.conf
```
add content

```sh
local    giteadb    gitea    scram-sha-256
```

login pgsql
```sh
psql -U gitea -d giteadb
```


download gitea
```sh
wget -O gitea https://dl.gitea.com/gitea/1.24.3/gitea-1.24.3-linux-amd64
chmod +x gitea
```

add user git
```sh
sudo adduser \
   --system \
   --shell /bin/bash \
   --gecos 'Git Version Control' \
   --group \
   --disabled-password \
   --home /home/git \
   git
```

create workspace
```sh
sudo mkdir -p /var/lib/gitea/{custom,data,log}
sudo chown -R git:git /var/lib/gitea/
sudo chmod -R 750 /var/lib/gitea/
sudo mkdir /etc/gitea
sudo chown root:git /etc/gitea
sudo chmod 770 /etc/gitea
```

move gitea
```sh
export GITEA_WORK_DIR=/var/lib/gitea/
sudo cp gitea /usr/local/bin/gitea
```
edit `/etc/gitea/app.ini`
```sh
[server]
SSH_DOMAIN       = gitea.dv
DOMAIN           = gitea.dv
ROOT_URL         = http://gitea.dv/
HTTP_ADDR        = 127.0.0.1
HTTP_PORT        = 3000

```





add `/etc/systemd/system/gitea.service`
```sh
[Unit]
Description=Gitea (Git with a cup of tea)
After=network.target

[Service]
RestartSec=2s
Type=simple
User=git
Group=git
WorkingDirectory=/var/lib/gitea/
ExecStart=/usr/local/bin/gitea web --config /etc/gitea/app.ini
Restart=always
Environment=USER=git HOME=/home/git GITEA_WORK_DIR=/var/lib/gitea

[Install]
WantedBy=multi-user.target
```

start service

```sh
sudo systemctl enable gitea
sudo systemctl start gitea
```

restart gitea
```sh
sudo systemctl restart gitea
```

config nginx
```sh
server {
    listen 80;
    server_name gitea.dv;

    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```

restart nginx
```sh
sudo systemctl restart nginx
```