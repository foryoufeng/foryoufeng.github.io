# install

```sh
sudo apt install postgresql postgresql-contrib
sudo systemctl status postgresql
sudo systemctl enable postgresql
sudo -u postgres psql
psql --version
```

see config
```sh
sudo -u postgres psql -c "SHOW config_file;"
```

config remote connections

```sh
sudo vi /etc/postgresql/17/main/postgresql.conf
```

set 
```sh
listen_addresses = '*'
```

```sh
sudo vi /etc/postgresql/17/main/pg_hba.conf
```

add content
```sh
local   all           all                scram-sha-256
host    all    all    0.0.0.0/0          scram-sha-256
host    all    all    ::/0               scram-sha-256
```

restart postgresql
```sh
sudo systemctl restart postgresql
```

see is it listen on tcp/ip
```sh
sudo ss -ltnp | grep 5432
```

use PostgreSql source

```sh
# 安装依赖
sudo apt-get install -y wget gnupg lsb-release

# 导入官方 GPG key
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# 添加官方仓库（用你系统的代号替换 $(lsb_release -cs)，比如 bullseye / bookworm / focal）
echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" | \
  sudo tee /etc/apt/sources.list.d/pgdg.list

# 更新
sudo apt-get upd  ate
sudo apt-get install -y postgresql
```