# install

install server
```sh
wget https://github.com/fatedier/frp/releases/download/v0.61.0/frp_0.61.0_linux_amd64.tar.gz
tar -zvxf frp_0.61.0_linux_amd64.tar.gz
```

config frps.toml

```sh
bindPort = 7000
auth.token = "token"
webServer.addr = "0.0.0.0"
webServer.port = 7500
webServer.user = "admin"
webServer.password = "admin"
```

add frps.service

```sh
sudo vim /etc/systemd/system/frps.service
```

add content
```sh
[Unit]
Description = frp server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
ExecStart = /var/www/test/frp_0.61.0_linux_amd64/frps -c /var/www/test/frp_0.61.0_linux_amd64/frps.toml

[Install]
WantedBy = multi-user.target

```

use systemd manage frps

```sh
sudo systemctl start frps
sudo systemctl stop frps
sudo systemctl restart frps
sudo systemctl status frps
sudo systemctl enable frps
```

nginx conf

```sh
server {
    listen 80;
    server_name dev.zxd.cn;
    location / {
        proxy_pass http://127.0.0.1:7500;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
    }
}
```

```sh
server {
    listen 80;
    server_name wuqiang.ptdplat.com;
    root /home/Documenst/docs/html/;
    index index.html index.htm;
    location / {
        try_files $uri $uri/ =404;
    }
}
```


config frpc.toml

```sh
serverAddr = "127.0.0.1"
serverPort = 7000

[auth]
method="token"
token="token"

[[proxies]]
name="wuqiang"
type = "tcp"
localPort = 8000
remotePort = 7501
```

start client

```sh
./frpc -c frpc.toml
```

add client service

```sh
sudo vim /etc/systemd/system/frpc.service
```

add content
```sh
[Unit]
Description = frp client
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
ExecStart = /home/wuqiang/Applications/frp_0.61.0_linux_amd64/frpc -c /home/wuqiang/Applications/frp_0.61.0_linux_amd64/frpc.toml

[Install]
WantedBy = multi-user.target

```

use systemd manage frpc

```sh
sudo systemctl start frpc
sudo systemctl stop frpc
sudo systemctl restart frpc
sudo systemctl status frpc
sudo systemctl enable frpc
```

mysql

```sh
[[proxies]]
name = "ssh"
type = "tcp"
localIP = "127.0.0.1"
localPort = 3306
remotePort = 7507
```