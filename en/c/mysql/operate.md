# operate mysql

```c
#include "stdio.h"
#include "stdlib.h"
#include "mariadb/mysql.h"
int main(){
    MYSQL *conn;
    MYSQL_RES *res;
    MYSQL_ROW row;
    const char *host = "192.168.54.200";
    const char *user = "root";
    const char *password = "";
    const char *database = "local_bid";
    const int port = 3306;

    conn = mysql_init(NULL);
    if (conn == NULL){
        fprintf(stderr,"mysql_init failed\n");
        return EXIT_FAILURE;
    }
    if(mysql_real_connect(conn,host,user,password,database,port,NULL,0)==NULL){
        fprintf(stderr,"mysql_real_connect() failed\n");
        mysql_close(conn);
        return EXIT_FAILURE;
    }
    const char *query = "select * from users limit 10 offset 0";
    if(mysql_query(conn,query)){
        fprintf(stderr,"select failed,Error:%s\n", mysql_error(conn));
        return EXIT_FAILURE;
    }
    res = mysql_store_result(conn);
    if(res == NULL){
        fprintf(stderr,"mysql_store_result() failed\n");
        mysql_close(conn);
        return EXIT_FAILURE;
    }
    int num_fields = mysql_num_fields(res);
    MYSQL_FIELD *fields = mysql_fetch_field(res);
    for (int i = 0; i < num_fields; i++) {
        printf("%s\t",fields[i].name);
    }
    printf("\n");
    while (row=mysql_fetch_row(res)){
        for (int i = 0; i < num_fields; i++) {
            printf("%s\t",row[i]?row[i]:"NULL");
        }
        printf("\n");
    }

    mysql_free_result(res);
    mysql_close(conn);


    return 0;
}
```