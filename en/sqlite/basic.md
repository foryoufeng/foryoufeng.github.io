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

show table

```sh
.table
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

alter table name

```sh
alter table users rename to user
```

alter table add column

```sh
ALTER TABLE users ADD COLUMN email text;
```

create table from exist table

```sh
create table student as select * from users;
create table student(id int,name text,age integer);
insert into student(id,name,age) select id,name,age from users;
```

delete table

```sh
drop table student;
```

update table

```sh
 update users set name='bob' where id=1;
```

delete data

```sh
delete from users where id=1;
```

transaction


```sh
begin;
insert into users values(3,"nice",12,"1@qq.com");
commit;
```

count

```sh
select count(*)from users;

```

group by

```sh
select name,count(name) s from users group by name order by s desc;
```

join table select

```sh
select u.*,s.name from users u,student s where u.id=s.id;
```

left join

```sh
select u.*,s.name from users u left join student s on u.id=s.id;
```

view

```sh
create view stu as select u.*,s.name from users u,student s where u.id=s.id;
select * from stu;
```

trigger for update and insert

```sh
create table user_log(
    id integer primary key autoincrement,
    action text,
    user_id int,
    old_data text,
    new_data text,
    create_at timestamp default current_timestamp
);
create trigger log_user_insert 
after insert on users
for each row
begin
  insert into user_log(action,user_id,new_data) values
  ('insert',NEW.id,json_object('name',NEW.name,'age',NEW.age));
end; 
create trigger log_user_update
after update on users
for each row
begin
  insert into user_log(action,user_id,old_data,new_data)values
  ('update',
  OLD.id,
  json_object('name',OLD.name,'age',OLD.age),
  json_object('name',NEW.name,'age',NEW.age)
  );
end;    
```

create index

```sh
cretae unique index if not exists idx_users_name_unique on users(name);
```