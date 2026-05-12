# install debain

get iso mirror
```sh
wget https://mirrors.tuna.tsinghua.edu.cn/debian-cd/current/amd64/iso-cd/debian-12.9.0-amd64-netinst.iso
```

change mirror to aliyun


```sh
cat /etc/os-release
```

backup old sources list

```sh
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

edit `/etc/apt/sources.list`


```sh
sudo vi /etc/apt/sources.list
```

if use `Debian 13 (trixie)`

```sh
deb http://mirrors.aliyun.com/debian/ trixie main contrib non-free non-free-firmware
deb http://mirrors.aliyun.com/debian/ trixie-updates main contrib non-free non-free-firmware
deb http://mirrors.aliyun.com/debian/ trixie-backports main contrib non-free non-free-firmware
deb http://mirrors.aliyun.com/debian-security/ trixie-security main contrib non-free non-free-firmware
```

update `apt`

```sh
sudo apt update
sudo apt upgrade
```