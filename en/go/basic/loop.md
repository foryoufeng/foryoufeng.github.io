# loop

for


```sh
package main

import "fmt"

func main() {
	var sum int
	for i := 0; i <= 100; i++ {
		sum += i
	}
	fmt.Println(sum)
}

```

while for

```sh
package main

import (
	"fmt"
	"time"
)

func main() {
	var i int
	for {
		fmt.Println("Hello, World!")
		time.Sleep(time.Second)
		i++
		if i == 100 {
			break
		}
	}
}

```


loop map

```sh
package main

import (
	"fmt"
)

func main() {
	names := map[int]string{
		1: "jim",
		2: "jim1",
		3: "jim2",
	}
	for k, v := range names {
		fmt.Println(k, v)
	}
}
```