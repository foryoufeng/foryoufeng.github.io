# firewalld

install

```sh
sudo apt update
sudo apt install firewalld -y

```

enable firewalld
```sh
sudo systemctl enable firewalld
sudo systemctl start firewalld
```

list rules
```sh
sudo firewall-cmd --list-all
```

add ports
```sh
sudo firewall-cmd --permanent --add-port=5432/tcp
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=22/tcp
sudo firewall-cmd --permanent --add-port=443/tcp
sudo firewall-cmd --permanent --add-port=3306/tcp
sudo firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="124.127.56.185" port protocol="tcp" port="8090" accept'
sudo firewall-cmd --reload
```