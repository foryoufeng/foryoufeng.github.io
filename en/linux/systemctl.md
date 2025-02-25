# systemctl

find service

```sh
systemctl list-units --type=service --state=active |grep php
```

add swoole service 
```sh
sudo vi /etc/systemd/system/swoole-ai.service
```

add config
```sh
[Unit]
Description=swoole-ai
After=network.target

[Service]
ExecStart=php /var/www/laravel-ai/bin/laravels start
Restart=always
User=www
WorkingDirectory=/var/www/laravel-ai/

[Install]
WantedBy=multi-user.target
```

reload systemd
```sh
sudo systemctl daemon-reload
sudo systemctl enable swoole-ai.service
sudo systemctl start swoole-ai.service
sudo systemctl status swoole-ai.service
```

see service taking time
```sh
systemd-analyze blame
```