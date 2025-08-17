# openvpn

install

```sh
sudo apt update
sudo apt install -y build-essential libssl-dev liblzo2-dev liblz4-dev libpkcs11-helper1-dev pkg-config  libnl-3-dev libnl-genl-3-dev libcap-ng-dev libpam0g-dev -y
wget https://swupdate.openvpn.org/community/releases/openvpn-2.6.3.tar.gz
tar xzf openvpn-2.6.3.tar.gz
cd openvpn-2.6.3
./configure
make -j$(nproc)
sudo make install
```

connect
```sh
sudo openvpn --config /etc/openvpn/client/client.ovpn 
```