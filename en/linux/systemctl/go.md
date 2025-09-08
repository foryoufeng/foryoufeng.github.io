# go service

add service 
```sh
sudo vi /etc/systemd/system/quote.service
```

add content
```sh
[Unit]
Description=quote
After=network.target

[Service]
ExecStart=/var/www/go/quote/quote
Restart=always
User=www
WorkingDirectory=/var/www/go/quote

[Install]
WantedBy=multi-user.target
```

start service

```sh
sudo systemctl daemon-reload
sudo systemctl enable quote.service
sudo systemctl start quote.service
sudo systemctl status quote.service
```