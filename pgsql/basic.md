# basic use


show databases

```
\l
```

connect database

```sh
\c giteadb
```

create table
```sh
CREATE TABLE users (
    id SERIAL PRIMARY KEY,        
    name VARCHAR(100) NOT NULL,   
    email VARCHAR(255) UNIQUE,    
    created_at TIMESTAMP DEFAULT NOW() 
);

-- Show all tables
\dt

```


quit

```sh
\q
```