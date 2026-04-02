# build

build
```sh
cd src
./make.bash
```



```sh
bootgo=1.24.6

set -e


```


build message

```sh
Building Go cmd/dist using /home/wuqiang/go/pkg/mod/golang.org/toolchain@v0.0.1-go1.26.0.linux-amd64. (go1.26.0 linux/amd64)
Building Go toolchain1 using /home/wuqiang/go/pkg/mod/golang.org/toolchain@v0.0.1-go1.26.0.linux-amd64.
Building Go bootstrap cmd/go (go_bootstrap) using Go toolchain1.
Building Go toolchain2 using go_bootstrap and Go toolchain1.
Building Go toolchain3 using go_bootstrap and Go toolchain2.
Building packages and commands for linux/amd64.
---
Installed Go for linux/amd64 in /home/wuqiang/Documents/github/go/go
Installed commands in /home/wuqiang/Documents/github/go/go/bin
*** You need to add /home/wuqiang/Documents/github/go/go/bin to your PATH.
```