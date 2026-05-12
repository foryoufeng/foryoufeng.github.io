# mariadb

install

```sh
sudo apt install mariadb-server mariadb-client -y
sudo systemctl enable --now mariadb
sudo mysql_secure_installation
mysql --version
```

config
```sh
sudo vi /etc/mysql/mariadb.conf.d/50-server.cnf
```

change `bind-address`

```sh
bind-address = 0.0.0.0
```

restart service

```sh
sudo systemctl restart mariadb
```