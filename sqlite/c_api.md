# c api

insert

```sh
#include <stdio.h>
#include "sqlite3.h"

int main(void) {
    sqlite3 *db = NULL;
    char *err= NULL;
    char *sql;
    int ret;
    ret = sqlite3_open("./test.db", &db);
    if (ret != SQLITE_OK) {
        fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
        return -1;
    }
    sql ="insert into users values(1,'jim')";
    sqlite3_exec(db,sql,NULL,NULL,&err);
    sqlite3_close(db);
    return 0;
}
```

prepare insert

```sh
#include <stdio.h>
#include <string.h>

#include "sqlite3.h"

int main(void) {
    sqlite3 *db = NULL;
    sqlite3_stmt *stmt;
    int ret;
    int rc;
    ret = sqlite3_open("./test.db", &db);
    if (ret != SQLITE_OK) {
        fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
        return -1;
    }
    const char *sql ="insert into users(id,name) values(?,?)";
    rc = sqlite3_prepare_v2(db, sql, -1, &stmt, NULL);
    if (rc != SQLITE_OK) {
        fprintf(stderr, "Can't prepare statement: %s\n", sqlite3_errmsg(db));
        sqlite3_close(db);
        return -1;
    }
    const char *name = "jim";
    const int age = 20;
    sqlite3_bind_text(stmt, 1, name, -1, NULL);
    sqlite3_bind_int(stmt, 2, age);
    rc = sqlite3_step(stmt);
    if (rc!=SQLITE_DONE) {
        fprintf(stderr, "Can't step statement: %s\n", sqlite3_errmsg(db));
    }else {
        int row = sqlite3_changes(db);
        long long  last_insert_id = sqlite3_last_insert_rowid(db);
        printf("last insert it %lld,row=%d\n", last_insert_id,row);
    }

    sqlite3_finalize(stmt);
    sqlite3_close(db);
    return 0;
}
```



delete data

```sh
#include <stdio.h>
#include "sqlite3.h"

int main(void) {
    sqlite3 *db = NULL;
    char *err= NULL;
    int ret;
    int rc;
    ret = sqlite3_open("./test.db", &db);
    if (ret != SQLITE_OK) {
        fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
        return -1;
    }
    const char *sql ="delete from users where id=1";
    rc = sqlite3_exec(db,sql,NULL,NULL,&err);
    if (rc != SQLITE_OK) {
        fprintf(stderr, "SQL error: %s\n", err);
        sqlite3_free(err);
    }else {
        int aff = sqlite3_changes(db);
        printf("delete column = %d\n", aff);
    }
    sqlite3_close(db);
    return 0;
}
```