# json

basic

```go
package main

import (
	"encoding/json"
	"fmt"
)

type Person struct {
	Name string `json:"name1"`
	Age  int
}

func main() {
	persons := []Person{{
		Name: "jim",
		Age:  20,
	}, {
		Name: "jim2",
		Age:  22,
	},
	}
	res, _ := json.Marshal(persons)
	fmt.Printf("%s", res)
}

```

format show

```go
data, err := json.MarshalIndent(movies, "", "    ")
```