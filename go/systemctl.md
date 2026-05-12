# systemctl

find service

```sh
systemctl list-units --type=service --state=active |grep ship
```

add ship service 
```sh
sudo vi /etc/systemd/system/ship.service
```

add config
```sh
[Unit]
Description=ship
After=network.target

[Service]
ExecStart=/var/www/go/ship/bin/ship
Restart=always
User=www
WorkingDirectory=/var/www/go/ship/

[Install]
WantedBy=multi-user.target
```

reload systemd
```sh
sudo systemctl daemon-reload
sudo systemctl enable ship.service
sudo systemctl start ship.service
sudo systemctl status ship.service
```

see service taking time
```sh
systemd-analyze blame
```