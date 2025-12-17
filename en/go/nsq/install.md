# install

```sh
wget https://s3.amazonaws.com/bitly-downloads/nsq/nsq-1.3.0.linux-amd64.go1.21.5.tar.gz
tar -zvxf nsq-1.3.0.linux-amd64.go1.21.5.tar.gz
cd nsq-1.3.0.linux-amd64.go1.21.5/
sudo cp bin/* /usr/local/bin/
```

see version

```sh
nsqd --version
nsqlookupd --version
nsqadmin --version
```

add systemd service

add `/etc/systemd/system/nsqlookupd.service`

```sh
[Unit]
Description=NSQ Lookupd

[Service]
ExecStart=/usr/local/bin/nsqlookupd
Restart=always

[Install]
WantedBy=multi-user.target
```

add `/etc/systemd/system/nsqd.service`

```sh
[Unit]
Description=NSQ Daemon

[Service]
ExecStart=/usr/local/bin/nsqd --lookupd-tcp-address=127.0.0.1:4160
Restart=always

[Install]
WantedBy=multi-user.target
```

add `/etc/systemd/system/nsqadmin.service`

```sh
[Unit]
Description=NSQ Admin

[Service]
ExecStart=/usr/local/bin/nsqadmin --lookupd-http-address=127.0.0.1:4161
Restart=always

[Install]
WantedBy=multi-user.target
```

start services

```sh
sudo systemctl daemon-reload
sudo systemctl enable nsqlookupd nsqd nsqadmin
sudo systemctl start nsqlookupd nsqd nsqadmin
```

access serve `http://127.0.0.1:4171`

only add nsqd in single server  `sudo vi /etc/systemd/system/nsqd.service`

```sh
[Unit]
Description=NSQ Lookupd

[Service]
ExecStart=/usr/local/bin/nsqd
Restart=always

[Install]
WantedBy=multi-user.target
```

start service

```sh
sudo systemctl daemon-reload
sudo systemctl enable nsqd
sudo systemctl start nsqd
```

