# interface

basic

```sh

type Usb interface {
	start()
	stop()
}

type Phone struct {
	name string
}

func (p *Phone) start() {
	fmt.Printf("Phone %s is starting...\n", p.name)
}

func (p *Phone) stop() {
	fmt.Printf("Phone %s is stopping...\n", p.name)
}

func run(u Usb) {
	if _, ok := u.(*Phone); ok {
		fmt.Println("is Phone")
	}
	u.start()
	u.stop()
}

func main() {
	p := &Phone{"Iphone"}
	run(p)
}

```

null interface

```sh
func show(s interface{}) {
	fmt.Println(s)
}
func main() {
	show("hello world")
}
```

map

```sh
var m1 = make(map[string]interface{})
m1["name"] = "zhangsan"
m1["age"] = 12
m1["married"] = true
fmt.Println(m1)
```