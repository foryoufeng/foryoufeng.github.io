# reflect

basic

```sh
func reflectFn(x any) {
	v := reflect.ValueOf(x)
	fmt.Println(v)
	val := reflect.TypeOf(x)
	fmt.Println(val)
	fmt.Println(v.Kind())
}
func main() {
	a := 10
	b := 24.3
	c := true
	d := "hello"
	reflectFn(a)
	reflectFn(b)
	reflectFn(c)
	reflectFn(d)
	p := &Person{"John"}
	reflectFn(p)
	a := []int{1, 2, 3}
	c := reflectFn
	reflectFn(c)

}
```

get value

```sh
func reflectValue(x any) {
	v := reflect.ValueOf(x)
	kind := v.Kind()
	switch kind {
	case reflect.Struct:
		fmt.Println(v.FieldByName("Name"))
	case reflect.Int:
		fmt.Println(v.Int() + 10)
	default:
		panic("unhandled default case")
	}
}
func main() {
	a := 10
	reflectValue(a)
}
```

set value

```sh
func reflectSetValue(x any) {
	v := reflect.ValueOf(x)
	if v.Elem().Kind() == reflect.Int {
		v.Elem().SetInt(20)
	}
}
func main() {
	a := 10
	reflectSetValue(&a)
	fmt.Println(a)
}
```

get struct field

```sh

type Person struct {
	Name  string `json:"name"`
	Age   int    `json:"age"`
	Score int    `json:"score"`
}

func structFiled(v any) {
	t := reflect.TypeOf(v)
	if t.Kind() == reflect.Ptr {
		t = t.Elem()
	}
	if t.Kind() != reflect.Struct {
		return
	}

	for i := 0; i < t.NumField(); i++ {
		field := t.Field(i)
		fmt.Println(field.Name, ":", field.Tag.Get("json"), field.Type, "\n")
	}

}
func main() {
	p := &Person{
		Name:  "John",
		Age:   20,
		Score: 10,
	}
	structFiled(p)
}
```

call struct func

```sh
func (p *Person) Print() {
	fmt.Println(p.Name)
}
func structFn(v any) {
	t := reflect.ValueOf(v)
	method := t.MethodByName("Print")
	if method.IsValid() {
		method.Call(nil)
	}

}
func main() {
	p := &Person{
		Name:  "John",
		Age:   20,
		Score: 10,
	}
	structFn(p)
}
```

struct set value

```sh
func (p *Person) SetInfo(name string, age int, score int) {
	p.Name = name
	p.Age = age
	p.Score = score
}
func structFnSet(v any) {
	t := reflect.ValueOf(v)
	method := t.MethodByName("SetInfo")
	if method.IsValid() {
		args := []reflect.Value{
			reflect.ValueOf("jim"),
			reflect.ValueOf(50),
			reflect.ValueOf(50),
		}
		method.Call(args)
	}
	method = t.MethodByName("Print")
	if method.IsValid() {
		method.Call(nil)
	}
}
func main() {
	p := &Person{
		Name:  "John",
		Age:   20,
		Score: 10,
	}
	structFnSet(p)
	fmt.Printf("%#v\n", p)
}
```