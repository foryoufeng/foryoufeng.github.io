# relations

basic

```sh
package main

import (
	"demo/model"
	"fmt"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func connect() *gorm.DB {
	db, err := gorm.Open(sqlite.Open("words.db?_foreign_keys=on"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	DB = db
	return DB
}

func main() {
	connect()
	var girl model.Girl
	DB.Preload("Boys").Where("id=?", 1).First(&girl)
	fmt.Println(girl)
	for _, boy := range girl.Boys {
		fmt.Println(boy)
	}
}

```

count

```sh

```