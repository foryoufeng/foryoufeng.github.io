# mod

init

```sh
go mod init example
```

download package

```sh
go mod tidy
```

init func,this will exec while package is used

```sh
func init() {
	fmt.Println("Init")
}
```