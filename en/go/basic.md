# basic

int

```sh
var a int = 12
fmt.Println(a)
```

const 

```sh
const PI = 3.14
fmt.Println(PI)
```


for

```sh
i := 10
for i > 0 {
    fmt.Println(i)
    i--
}
```

Sprintf

```sh
s := "hello"
str := fmt.Sprintf("this is %s", s)
```

iota

```sh
const(
a = iota
b
c
d)
fmt.Println(a,b,c,d)  
```

range

```sh
var arr = []string{"php", "java", "go"}
for _, value := range arr {
    fmt.Println(value)
}
```

switch

```sh
typeName := "mysql"
switch typeName {
case "mysql":
    fmt.Println("mysql")
    fallthrough  # can continue to postgres
case "postgres":
    fmt.Println("postgres")
default:
    fmt.Println("not supported type" + typeName)
}
```

array

```sh
arr :=[...]int{1,2,3}
fmt.Println(len(arr))
```

slice

```sh
arr1 := []int{1, 2, 3}
arr2 := arr1
arr1[0] = 2
fmt.Println(arr2) # [2 2 3]

```

slice append

```sh
func main() {
	var arr = []int{1, 2, 3}
	var arr2 = []int{4, 5, 6}
	arr2 = append(arr, arr2...)
	fmt.Println(arr2)
	fmt.Println(len(arr2))
	fmt.Println(cap(arr2))
}
```

count str

```sh
func main() {
	var str = "how do you do"
	var stringSlice = strings.Split(str, " ")
	var mapStr = make(map[string]int)
	for _, v := range stringSlice {
		mapStr[v]++
	}
	for k, v := range mapStr {
		fmt.Println(k, v)
	}
}
```

map

```sh
func main() {
	obj := map[string]any{
		"age":  1,
		"name": "jim",
	}
	fmt.Println(obj["age"])
}
```

print *

```sh
i := 33
	for i > 0 {
		fmt.Print("*")
		i--
	}
	fmt.Println()
	i = 5
	for i > 0 {
		fmt.Print("**")
		j := 29
		for j > 0 {
			fmt.Print(" ")
			j--
		}
		fmt.Println("**")
		i--
	}
	i = 33
	for i > 0 {
		fmt.Print("*")
		i--
	}
```

9*9

```sh
package main

import "fmt"

func main() {
	i := 1
	for i <= 9 {
		for j := 1; j <= i; j++ {
			fmt.Print(i, "*", j, "=", i*j, "\t")
		}
		i++
	}
}

```

print string

```sh
package main

import "fmt"

func main() {
	str := "你好golang"
	for k, v := range str {
		fmt.Println(k, string(v))
	}
}

```