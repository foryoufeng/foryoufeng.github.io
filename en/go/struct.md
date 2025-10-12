# struct 

basic

```sh
type Person struct {
	name string
	age  int
	sex  string
}

func main() {
	p := &Person{
		name: "John Doe",
		age:  23,
		sex:  "male",
	}
	fmt.Println(p, p.name)
}
```

custom type

```sh
type MtInt int

func (m *MtInt) run() {
	fmt.Println("mtInt run", *m)
}
func main() {
	var a MtInt = 20
	a.run()
}
```

struct more

```sh
type Person struct {
	name    string
	age     int
	sex     string
	Address []Address
}

func (p Person) run() {
	fmt.Println("person run", p.name)
}

type Address struct {
	City  string
	Phone string
	Name  string
}

func main() {
	p := Person{
		name: "Jack",
		age:  23,
		sex:  "male",
		Address: []Address{
			{
				City:  "New York",
				Phone: "010",
				Name:  "hello",
			},
			{
				City:  "New York",
				Phone: "010",
				Name:  "hello",
			},
		},
	}
	p.run()
	//fmt.Println(p)
	for _, v := range p.Address {
		fmt.Println(v.Name, v.City, v.Phone)
	}
}
```

same name

```sh
type Person struct {
	name    string
	age     int
	sex     string
	Email   Email
	Address Address
}

type Email struct {
	AddTime string
	Name    string
}
type Address struct {
	AddTime string
	Name    string
}

func main() {
	p := Person{
		name: "Jack",
		age:  23,
		sex:  "male",
		Email: Email{
			AddTime: "email addTime",
			Name:    "email name",
		},
		Address: Address{
			AddTime: "address addTime",
			Name:    "address name",
		},
	}
	fmt.Println("p:", p.Address.AddTime)
	fmt.Println("p:", p.Email.AddTime)

}
```

struct extend

```sh
type Animal struct {
	Name string
}

type Cat struct {
	Animal
}

func (a Animal) Greet() string {
	return a.Name
}

func main() {
	a := Cat{
		Animal: Animal{
			Name: "Cat",
		},
	}
	name := a.Greet()
	fmt.Println(name)
}

```

struct to json

```sh
type Student struct {
	Name string
	Age  int
	Sex  string
}

func main() {
	s := Student{
		Name: "jim",
		Age:  20,
		Sex:  "male",
	}
	j, _ := json.Marshal(s)
	fmt.Println(string(j))
}
```

json to struct

```sh
str := `{"Name":"jim","Age":20,"Sex":"male"}`
s := new(Student)
json.Unmarshal([]byte(str), s)
if err != nil {
    fmt.Println(err)
    return
}
fmt.Println(s.Name)
```

struct tag

```sh
type Person struct {
	Name    string  `json:"name"`
	Age     int     `json:"age"`
}

func main() {
	p := &Person{"John", 20}
	str, _ := json.Marshal(p)
	fmt.Println(string(str))
}
```