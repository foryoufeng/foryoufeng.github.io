# ufw

install
```sh
sudo apt install ufw -y
sudo ufw enable
//see detail
sudo ufw status verbose
```

allow ssh

```sh
sudo ufw allow ssh
```

open port
```sh
sudo ufw allow 80
```

allow ip access port

```sh
sudo ufw allow from  106.8.71.14 to any port 22
```

see number
```sh
sudo ufw status numbered
//delete by id
sudo  ufw delete 2
```

close ipv6
```sh
sudo nano /etc/default/ufw
```
change
```sh
IPV6=no
```

reload

```sh
sudo ufw reload
```

system close ipv6

edit sysctl
```sh
sudo nano /etc/sysctl.conf
```

```sh
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv6.conf.lo.disable_ipv6 = 1
```

work
```sh
sudo sysctl -p
```