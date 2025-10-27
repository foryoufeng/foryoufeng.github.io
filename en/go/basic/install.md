# install

install  https://go.dev/dl/

```sh
tar -C /usr/local -xzf go1.25.0.linux-amd64.tar.gz
```
add to path
```sh
export PATH=$PATH:/usr/local/go/bin
```

```
go version
```

config mirror

```sh
go env -w GOPROXY=https://goproxy.cn,direct
```

see mirror

```sh
go env GOPROXY
```