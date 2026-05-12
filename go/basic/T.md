# T

basic

```sh
package main

import "fmt"

func add[T int | uint](a, b T) T {
	return a + b
}
func main() {
	i1 := add(1, 2)
	var u1 uint = 12
	var u2 uint = 14
	i2 := add(u1, u2)
	fmt.Println(i1, i2)
}

```

