# install

```sh
sudo apt install postgresql postgresql-contrib
sudo systemctl status postgresql
sudo systemctl enable postgresql
sudo -u postgres psql
```

see config
```sh
sudo -u postgres psql -c "SHOW config_file;"
```

config remote connections

```sh
sudo vi /etc/postgresql/16/main/postgresql.conf
```

set 
```sh
listen_addresses = '*'
```

```sh
sudo vi /etc/postgresql/16/main/pg_hba.conf
```

add content
```sh
host    all    all    192.168.54.0/24    scram-sha-256
```

restart postgresql
```sh
sudo systemctl restart postgresql
```

see is it listen on tcp/ip
```sh
sudo ss -ltnp | grep 5432
```