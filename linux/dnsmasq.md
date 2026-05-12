# dnsmasq

install

```sh
sudo apt install dnsmasq
sudo systemctl enable dnsmasq
sudo systemctl start dnsmasq
```

vi `/etc/dnsmasq.conf`
```sh
conf-dir=/etc/dnsmasq.d
```

add config
```sh
sudo vi /etc/dnsmasq.d/dv.conf
```

add content
```sh
address=/dv/192.168.54.200
no-resolv
```

restart service

```sh
sudo systemctl restart dnsmasq
```

see if dnsmasq listen 53
```sh
sudo lsof -i :53
```

set system resolve
```sh
sudo bash -c 'echo "nameserver 127.0.0.1" > /etc/resolv.conf'
sudo systemctl disable systemd-resolved
sudo systemctl stop systemd-resolved
```

add resolv
```sh
sudo bash -c 'echo "nameserver 192.168.54.200" > /etc/resolv.conf'
```