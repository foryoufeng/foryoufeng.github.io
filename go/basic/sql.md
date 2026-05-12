# sql


```sh
package main

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./words.db")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	err = db.Ping()
	if err != nil {
		panic(err)
	}
	fmt.Println("success")
	rows, err := db.Query("select id,name,email from users")
	if err != nil {
		panic(err)
	}
	defer rows.Close()
	for rows.Next() {
		var id int
		var name string
		var email string
		err = rows.Scan(&id, &name, &email)
		fmt.Printf("ID=%d, Name=%s, Email=%s\n", id, name, email)
	}
	insertSql := "insert into users(name,email) values(?,?)"
	_, err = db.Exec(insertSql, "jim", "1@qq.com")
	if err != nil {
		panic(err)
	}
	res, err := db.Exec("update users set email=? where id=?", "2@qq.com", 4)
	if err != nil {
		panic(err)
	}
	fmt.Println(res.RowsAffected())
	res2, err := db.Exec("delete from users where id=?", 1)
	if err != nil {
		panic(err)
	}
	fmt.Println(res2)
	var id int
	var name string
	var email string
	db.QueryRow("select id,name,email from users").Scan(&id, &name, &email)
	fmt.Println(id, name, email)
}

```