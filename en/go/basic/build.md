# go build

main.go

```sh
//go:build prod
// +build prod

package main

import "fmt"

func main() {
	fmt.Println("生产环境版本")
}
```

build
```sh
go build --tags prod -o myapp
```