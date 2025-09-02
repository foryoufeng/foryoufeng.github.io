# func

basic

```sh
func sum(a int,b int)int{
  return a + b
}
```

more return

```sh
func sum(a int, b int) (int, int) {
	return a + b, a - b
}
```

custom type

```sh
type calc func(int, int) int

func add(a, b int) int {
	return a + b
}
func main() {
	var c calc
	c = add
	fmt.Println(c(10, 5))
}
```

run function

```sh
type calc func(int, int) int

func computer(a, b int, c calc) int {
	return c(a, b)
}
func main() {
	i := computer(2, 4, func(a int, b int) int {
		return a * b
	})
	fmt.Println(i)
}
```

panic

```sh
func f1() int {
	panic("error")
}
func main() {
	f1()
}
```

recover

```sh
func f1(a int,b int) int {
	defer func() {
		err := recover()
		if err != nil {
			fmt.Println(err)
		}
	}()
	return a/b
}
func main() {
	f1(10,0)
}
```

