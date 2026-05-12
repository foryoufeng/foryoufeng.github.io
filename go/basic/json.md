# json

basic

```go
package main

import (
	"encoding/json"
	"fmt"
)

type Person struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}
```

format show

```go
data, err := json.MarshalIndent(movies, "", "    ")
```