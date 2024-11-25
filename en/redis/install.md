# install

```sh
sudo apt-get install redis-server -y
sudo systemctl daemon-reload
sudo systemctl enable redis-server
sudo systemctl restart redis-server
```

config redis

```sh
sudo vim /etc/redis/redis.conf
//add config
bind 0.0.0.0
requirepass sd42jSre
```