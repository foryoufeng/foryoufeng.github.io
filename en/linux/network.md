# network

* cat ip

```shell
hostname -I
```

* install net-tools

```sh
sudo apt install net-tools
```


## install driver

1. Identify the Ethernet Controller

```sh
lspci | grep -i ethernet
```

2. download realtek driver

```sh
https://www.realtek.com/Download/List?cate_id=584
```

3. install dependencies

```sh
sudo apt update
sudo apt install build-essential linux-headers-$(uname -r) -y
```

4. build driver

```sh

sudo ./autorun.sh
```