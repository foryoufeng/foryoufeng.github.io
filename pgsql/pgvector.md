## pgvector

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