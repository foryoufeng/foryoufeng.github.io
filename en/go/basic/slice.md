# slice


```sh
var a = make([]int, 4)
a[0] = 1
fmt.Println(a)
```

get slice

```sh
package main

import "fmt"

func main() {
	var arr = []string{"a", "b", "c", "d"}
	fmt.Println(arr[1:])
	fmt.Println(arr[:2])
	fmt.Println(arr[:])
	fmt.Println(arr[len(arr)-1:])
}

```
