# v2ray

```sh
wget https://github.com/XTLS/Xray-core/releases/latest/download/Xray-linux-64.zip
unzip Xray-linux-64.zip
sudo install -m 755 xray /usr/local/bin/xray
sudo mkdir -p /usr/local/share/xray
sudo install -m 644 geoip.dat geosite.dat /usr/local/share/xray/
xray version
xray run -config ~/.local/share/v2rayN/binConfigs/config.json
```

Create a systemd user service
```sh
mkdir -p ~/.config/systemd/user
vi ~/.config/systemd/user/xray.service
```