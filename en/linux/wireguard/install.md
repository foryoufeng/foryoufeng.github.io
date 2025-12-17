# wireguard 

install 

```sh
sudo apt update
sudo apt install wireguard -y
```

generate key

```sh
wg genkey | tee /etc/wireguard/privatekey | wg pubkey > /etc/wireguard/publickey
```

edit config

```sh
sudo vi /etc/wireguard/wg0.conf
```

insert config

```sh
[Interface]
Address = 10.0.0.1/24
PrivateKey = 
ListenPort = 51820

PostUp = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE

[Peer]
PublicKey = 
AllowedIPs = 10.0.0.2/32

```

start ip change

```sh
echo "net.ipv4.ip_forward=1" | sudo tee /etc/sysctl.d/wg.conf
sudo sysctl --system
```

start service
```sh
sudo wg-quick up wg0
sudo systemctl enable wg-quick@wg0
```

restart 
```sh
sudo wg-quick down wg0
sudo systemctl start wg-quick@wg0
```

