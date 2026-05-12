# install

```sh
sudo apt update
sudo apt install -y \
build-essential \
libpcre3 libpcre3-dev \
zlib1g zlib1g-dev \
libssl-dev \
git wget
```

configure
```sh
./auto/configure \
--prefix=/home/wuqiang/Documents/github/c/nginx/tmp \
--sbin-path=/home/wuqiang/Documents/github/c/nginx/tmp/sbin/nginx \
--conf-path=/home/wuqiang/Documents/github/c/nginx/tmp/conf/nginx.conf \
--error-log-path=/home/wuqiang/Documents/github/c/nginx/tmp/error.log \
--http-log-path=/home/wuqiang/Documents/github/c/nginx/tmp/access.log \
--with-http_ssl_module \
--with-http_v2_module \
--with-http_gzip_static_module \
--with-stream
```

Compile
```sh
make -j$(nproc)
make install
```

see nginx version
```sh
tmp/sbin/nginx -v
```