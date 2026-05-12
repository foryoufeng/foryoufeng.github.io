# sql

find foreign key

```sh
SELECT 
    TABLE_NAME,
    CONSTRAINT_NAME,
    COLUMN_NAME,
    REFERENCED_TABLE_NAME,
    REFERENCED_COLUMN_NAME
FROM 
    information_schema.KEY_COLUMN_USAGE
WHERE 
    CONSTRAINT_NAME = 'goods_id_f';
```

create databases
```sh
CREATE DATABASE deploy
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```