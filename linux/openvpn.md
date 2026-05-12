# openvpn

install

```sh
sudo apt update
sudo apt install openvpn easy-rsa -y
# add to $PATH
export PATH=$PATH:/usr/sbin
```

config ca
```sh
make-cadir ~/openvpn-ca
cd ~/openvpn-ca
vi vars
```

set your info

```sh
set_var EASYRSA_REQ_COUNTRY    "CN"
set_var EASYRSA_REQ_PROVINCE   "Beijing"
set_var EASYRSA_REQ_CITY       "Beijing"
set_var EASYRSA_REQ_ORG        "MyOrg"
set_var EASYRSA_REQ_EMAIL      "admin@example.com"
set_var EASYRSA_REQ_OU         "MyUnit"

```

run 
```sh
./easyrsa init-pki
./easyrsa build-ca    # 创建 CA 根证书 ibicn

```

generate ca
```sh
./easyrsa gen-req server nopass
./easyrsa sign-req server server

# client 
./easyrsa gen-req client1 nopass
./easyrsa sign-req client client1

# avoid DoS
./easyrsa gen-dh
openvpn --genkey secret ta.key
```

config OpenVPN server
```sh
sudo mkdir -p /etc/openvpn/server
sudo cp pki/ca.crt pki/private/server.key pki/issued/server.crt pki/dh.pem ta.key /etc/openvpn/server/
```

create config
```sh
sudo vi /etc/openvpn/server/server.conf
```

add content
```sh
port 1194
proto udp
dev tun
ca /etc/openvpn/server/ca.crt
cert /etc/openvpn/server/server.crt
key /etc/openvpn/server/server.key
dh /etc/openvpn/server/dh.pem
auth SHA256
tls-auth /etc/openvpn/server/ta.key 0
topology subnet
server 10.8.0.0 255.255.255.0
push "redirect-gateway def1 bypass-dhcp"
push "dhcp-option DNS 8.8.8.8"
keepalive 10 120
persist-key
persist-tun
status openvpn-status.log
verb 3
explicit-exit-notify 1
```

config ip rules
```sh
echo "net.ipv4.ip_forward=1" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

set iptables
```sh
sudo apt install iptables -y
sudo iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
sudo apt install iptables-persistent -y
sudo netfilter-persistent save
sudo netfilter-persistent reload
sudo iptables -t nat -L -n -v

```

set ufw
```sh
sudo vi /etc/ufw/sysctl.conf
```

add config
```sh
net/ipv4/ip_forward=1
```

edit `/etc/ufw/before.rules`
```sh
sudo vi /etc/ufw/before.rules
```

add config
```sh
*nat
:POSTROUTING ACCEPT [0:0]
-A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
COMMIT
```

edit `/etc/default/ufw`
```sh
sudo vi /etc/default/ufw
```

change `DEFAULT_FORWARD_POLICY="DROP"`

```sh
DEFAULT_FORWARD_POLICY="ACCEPT"
```

start ufw
```sh
sudo ufw disable && sudo ufw enable
```


start openvpn service
```sh
sudo systemctl start openvpn-server@server
sudo systemctl enable openvpn-server@server
```

import client .ovpn to OpenVPN GUI

```sh
client
dev tun
proto udp
remote <你的服务器公网IP> 1194
resolv-retry infinite
nobind
persist-key
persist-tun
remote-cert-tls server
auth SHA256
tls-auth ta.key 1
cipher AES-256-CBC
verb 3

<ca>
# 这里粘贴 ca.crt 内容
</ca>
<cert>
# 这里粘贴 client1.crt 内容
</cert>
<key>
# 这里粘贴 client1.key 内容
</key>
<tls-auth>
# 这里粘贴 ta.key 内容
</tls-auth>
```

see content
```sh
cat pki/issued/client1.crt
cat pki/private/client1.key
cat pki/ca.crt
cat ta.key
```

see log
```sh
sudo journalctl -u openvpn-server@server
sudo cat /var/log/syslog | grep openvpn
```

linux client config
```sh
sudo apt install openvpn -y
sudo openvpn --config client.ovpn
sudo systemctl start openvpn-client@client
```