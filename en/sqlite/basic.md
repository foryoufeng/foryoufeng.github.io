# sqlite basic

install
```sh
sudo apt install sqlite3
```

creata db
```sh
sqlite3 test.db
```

is will show sqlite command
```sh
SQLite version 3.XX.X  YYYY-MM-DD HH:MM:SS
Enter ".help" for usage hints.
sqlite>
```

show databases
```sh
.database
```

create table
```sh
CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER);
```

insert data
```sh
INSERT INTO users (name, age) VALUES ('Alice', 25);
```
exit
```sh
.exit
```

show table info
```sh
PRAGMA table_info(users);
```
