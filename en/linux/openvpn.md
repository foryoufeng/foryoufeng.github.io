# openvpn

install


```sh
mkdir -p /etc/apt/keyrings
curl -fsSL https://swupdate.openvpn.net/repos/repo-public.gpg | tee /etc/apt/keyrings/openvpn-repo-public.asc
echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/openvpn-repo-public.asc] https://build.openvpn.net/debian/openvpn/stable jammy main" | sudo tee /etc/apt/sources.list.d/openvpn-aptrepo.list
sudo apt update
sudo apt install openvpn
```