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

add laravel-queue

```sh
sudo vi /etc/systemd/system/moodoodoo-queue.service
```

add content 
```sh
[Unit]
Description=moodoodoo Queue Worker
After=network.target

[Service]
User=www
Group=www
Restart=always
RestartSec=5

WorkingDirectory=/var/www/moodoodoo/shop/
ExecStart=php /var/www/moodoodoo/shop/artisan queue:work --sleep=3 --tries=3 --timeout=90 --queue=moodoodoo

StandardOutput=append:/var/log/moodoodoo-queue.log
StandardError=append:/var/log/moodoodoo-queue-error.log

KillSignal=SIGTERM
TimeoutStopSec=60

[Install]
WantedBy=multi-user.target

```

reload systemd
```sh
sudo systemctl daemon-reload
sudo systemctl enable moodoodoo-queue.service
sudo systemctl start moodoodoo-queue.service
sudo systemctl status moodoodoo-queue.service
```