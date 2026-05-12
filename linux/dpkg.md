# dpkg

install

```sh
sudo dpkg -i ngui.deb
```

list

```sh
dpkg -l |grep "ngui"
```

remove

```sh
sudo dpkg -r ngui
```

repositories store

```sh
cd /etc/apt/sources.list.d
```

see package info
```sh
dpkg -L ngui
```