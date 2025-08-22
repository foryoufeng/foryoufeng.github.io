# install

```sh
sudo apt install postgresql postgresql-contrib
sudo apt install postgresql-16-pgvector
sudo systemctl status postgresql
sudo systemctl enable postgresql
sudo -u postgres psql
```

install pgvector

```sh
sudo apt install postgresql-16-pgvector
sudo -u postgres psql -c "\dx"
CREATE EXTENSION IF NOT EXISTS vector;
```

install pgvector by source

```sh
git clone git@github.com:pgvector/pgvector.git
sudo apt install postgresql-server-dev-16 build-essential
sudo apt install git make gcc libpq-dev
cd pgvector
make 
sudo make install
sudo -u postgres psql

```

see config
```sh
sudo -u postgres psql -c "SHOW config_file;"
```

config remote connections

```sh
sudo vi /etc/postgresql/15/main/postgresql.conf
```

set 
```sh
listen_addresses = '*'
```

```sh
sudo vi /etc/postgresql/15/main/pg_hba.conf
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