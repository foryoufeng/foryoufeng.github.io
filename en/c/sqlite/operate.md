# sqlite operate

```c
#include <stdio.h>
#include <sqlite3.h>
int main(){

 sqlite3 *db;
 char *err_msg = 0;
 int rc = sqlite3_open("test.db", &db);
 if (rc != SQLITE_OK) {
  fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
 }
 const char *sql = "drop table if exists users;"
 "CREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT);"
 "INSERT INTO users(name) VALUES ('Alice');"
"INSERT INTO users(name) VALUES ('Bob');";

 rc = sqlite3_exec(db, sql, 0, 0, &err_msg);
 if (rc != SQLITE_OK) {
  fprintf(stderr, "SQL error: %s\n", err_msg);
  sqlite3_free(err_msg);
  sqlite3_close(db);
  return 1;
 }
 const char *sql_select = "select * from users;";
 sqlite3_stmt *stmt;
 rc = sqlite3_prepare_v2(db, sql_select, -1, &stmt, 0);
 if (rc != SQLITE_OK) {
  fprintf(stderr, "SQL error: %s\n", sqlite3_errmsg(db));
  sqlite3_close(db);
  return 1;
 }
 printf("ID | name\n");
 printf("-------\n");
 while ((rc = sqlite3_step(stmt)) == SQLITE_ROW) {
    int id = sqlite3_column_int(stmt, 0);
    const unsigned char *name = sqlite3_column_text(stmt, 1);
    printf("%d | %s\n", id, name);
 }
 sqlite3_finalize(stmt);
 sqlite3_close(db);

 return 0;
}
```


compile

```sh
gcc -o sqlite_demo sqlite.c -lsqlite3
```