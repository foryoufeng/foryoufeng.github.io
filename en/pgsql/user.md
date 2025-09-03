# user

create super user
```sh
CREATE ROLE admin WITH LOGIN PASSWORD '123456' SUPERUSER;
```

create user

```sh
CREATE USER username WITH PASSWORD 'your_password';
```

create with create database
```sh
CREATE USER myuser WITH LOGIN CREATEDB PASSWORD 'mypassword';
```

give permission
```sh
GRANT ALL PRIVILEGES ON DATABASE mydb TO myuser;
```

show users
```sh
\du
```