# langbot

docker install
```sh
docker pull registry.cn-hangzhou.aliyuncs.com/gewe/gewe:latest
docker tag registry.cn-hangzhou.aliyuncs.com/gewe/gewe gewe
mkdir -p /root/temp
docker run -itd -v /home/www/wechat:/root/temp -p 2531:2531 -p 2532:2532 --restart=always --privileged=true --name=gewe gewe /usr/sbin/init
```