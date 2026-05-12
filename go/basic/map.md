# map

basic

```sh
package main

import "fmt"

func main() {
	var users = map[string]any{
		"jim":  12,
		"jim1": 12,
		"jim2": 12,
	}
	for k, v := range users {
		fmt.Println(k, v)
	}
}
```

