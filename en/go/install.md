# install

install by apt

```sh
sudo apt update
sudo apt install -y golang
```

install by source code
```sh
wget https://go.dev/dl/go1.25.3.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.25.3.linux-amd64.tar.gz
vi ~/.bashrc
```

add content
```sh
export PATH=$PATH:/usr/local/go/bin
```

Apply change
```sh
source ~/.bashrc
```

see go version
```sh
go version
```

set proxy
```sh
go env -w GOPROXY=https://goproxy.cn,direct
```

see proxy
```sh
go env GOPROXY
```