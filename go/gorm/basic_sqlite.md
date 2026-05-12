# sqlite

basic

```sh
package main

import (
	"fmt"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name  string
	Email string
}

func main() {
	db, err := gorm.Open(sqlite.Open("words.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	//db.Create(&User{Name: "bob1", Email: "qqq3@qq.com"})
	var users []User
	db.Find(&users)
	fmt.Println("ID", "name", "email")
	for _, user := range users {
		fmt.Println(user.ID, user.Name, user.Email)
	}
}

```

add many


```sh
type Person struct {
	ID        int
	Name      string `gorm:"size:16;not null;unique"`
	Email     string
	CreatedAt time.Time
}

var DB *gorm.DB

func connect() *gorm.DB {
	db, err := gorm.Open(sqlite.Open("words.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	DB = db
	return DB
}
func main() {
	connect()
	persons := []Person{
		{Name: "jim3", Email: "1@qq.com"},
		{Name: "jim4", Email: "1@qq.com"},
	}
	DB.Create(&persons)
	fmt.Println(persons)
}
```

before create


```sh
func (p *Person) BeforeCreate(tx *gorm.DB) error {
	fmt.Println("before create")
	p.Name = "__" + p.Name
	return nil
}
func main() {
	connect()
	person := Person{Name: "jim6", Email: "1@qq.com"}
	DB.Create(&person)
}
```

find and show debug

```sh
func main() {
	connect()
	var person Person
	DB.Debug().Where("id=?", 1).Last(&person)
	fmt.Println(person)
}
```

not found deal

```sh
func main() {
	connect()
	var person Person
	err := DB.Debug().Where("id=?", 11).Last(&person).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		fmt.Println(err)
	}
	fmt.Println(person)
}
```

update

```sh
func main() {
	connect()
	var person Person
	person.ID = 1
	person.Name = "jim123"
	person.Email = "1@qq.com"
	DB.Save(&person)
	fmt.Println(person)
}
```

delete

```sh
func main() {
	connect()
	DB.Delete(&Person{}, 2)
}
```

pluck

```sh
func main() {
	connect()
	var nameList []string
	DB.Model(&Person{}).Pluck("Name", &nameList)
	for _, name := range nameList {
		fmt.Println(name)
	}
}
```

scan struct


```sh
func main() {
	connect()
	type Item struct {
		Label string `gorm:"column:name"`
		Value string `gorm:"column:id"`
	}
	var items []Item
	DB.Model(&Person{}).Scan(&items)
	for _, item := range items {
		fmt.Println(item.Label, item.Value)
	}
}
```

group

```sh
func main() {
	connect()
	type Item struct {
		Label string `gorm:"column:email"`
		Value string `gorm:"column:count"`
	}
	var items []Item
	DB.Model(&Person{}).Group("email").Select("email", "count(id) as count").Scan(&items)
	for _, item := range items {
		fmt.Println(item.Label, item.Value)
	}
}
```

distinct

```sh
func main() {
	connect()
	type Item struct {
		Label string `gorm:"column:email"`
		Value string `gorm:"column:id"`
	}
	var items []Item
	DB.Model(&Person{}).Select("email", "id").Distinct("email").Scan(&items)
	for _, item := range items {
		fmt.Println(item.Label, item.Value)
	}
}
```

page

```sh
func main() {
	connect()
	var persons []Person
	DB.Model(&Person{}).Limit(1).Offset(3).Find(&persons)
	for _, person := range persons {
		fmt.Println(person.ID, person.Name, person.Email)
	}
}
```

scopes


```sh
func NameIn(nameList ...string) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		return db.Where("name in (?)", nameList)
	}
}
func main() {
	connect()
	var persons []Person
	DB.Model(&Person{}).Scopes(NameIn("jim3", "jim4")).Find(&persons)
	for _, person := range persons {
		fmt.Println(person.ID, person.Name, person.Email)
	}
}
```

one to one


```sh
type Person struct {
	ID           int
	Name         string `gorm:"size:16;not null;unique"`
	Email        string
	PersonDetail *PersonDetail `gorm:"constraint:OnUpdate:CASCADE"`
	CreatedAt    time.Time
	DeletedAt    gorm.DeletedAt
}

type PersonDetail struct {
	gorm.Model
	PersonId int `gorm:"not null;unique"`
	Phone    string
	Person   *Person `gorm:"foreignKey:PersonId"`
}
func main(){
  DB.Create(&Person{
		Name:  "John Doe",
		Email: "1@qq.com",
		PersonDetail: &PersonDetail{
			Phone: "13222222222",
		},
	})
}
```

with delete


```sh
var id = 2
var person Person
DB.Where("id=?", id).Unscoped().Select("PersonDetail").Delete(&person)

```