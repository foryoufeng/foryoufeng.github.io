# user

create user
```sh
CREATE USER 'shop'@'%' IDENTIFIED BY '123456';
```

give privileges
```sh
GRANT ALL PRIVILEGES ON `laravel-shop`.* TO 'shop'@'%';
FLUSH PRIVILEGES;
```