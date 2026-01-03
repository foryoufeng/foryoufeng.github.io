# install

```sh
sudo su
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)
```

config
```sh
wget https://raw.githubusercontent.com/bannedbook/fanqiang/master/v2ss/server-cfg/v2/config.json  -O -> /usr/local/etc/v2ray/config.json
vi /usr/local/etc/v2ray/config.json
```

start service 

```sh
service v2ray restart
```