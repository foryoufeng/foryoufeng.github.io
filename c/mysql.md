# connect to mysql

change CMakeLists.txt

```sh
cmake_minimum_required(VERSION 3.10)
project(mysql-demo)

set(CMAKE_C_STANDARD 11)

# Include MySQL headers
include_directories(/usr/include/mysql)

# Add source files
add_executable(mysql-demo mysql-demo.cpp)

# Link the MySQL client library
target_link_libraries(mysql-demo mysqlclient)

```

config code

```sh
#include <stdio.h>
#include "mysql/mysql.h"

int main(){
    MYSQL *conn;
    MYSQL_RES *res;
    MYSQL_ROW row;
    conn = mysql_init(NULL);
    if(conn == NULL){
        printf("mysql init failed\n");
        exit(0);
    }
    if(mysql_real_connect(conn,"localhost","root","123456","local_chat", 0, NULL, 0) == NULL){
        fprintf(stderr,"mysql_real_connect failed\n");
        mysql_close(conn);
    }
    printf("connected mysql\n");
    if(mysql_query(conn,"select * from users limit 10")){
        fprintf(stderr,"select failed\n", mysql_error(conn));
        mysql_close(conn);
        exit(0);
    }
    res = mysql_store_result(conn);
    if(res == NULL){
        fprintf(stderr,"result error\n", mysql_error(conn));
        mysql_close(conn);
        exit(0);
    }
    while ((row = mysql_fetch_row(res))!=NULL){
        printf("id:%s name:%s nickname:%s\n",row[0],row[1],row[2]);
    }
    mysql_free_result(res);
    mysql_close(conn);

    return 0;
}
```