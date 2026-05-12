# source build


```sh
git clone https://gitcode.com/GitHub_Trending/ph/php-src.git
sudo apt install -y \
  build-essential \
  autoconf \
  bison \
  re2c \
  pkg-config \
  libxml2-dev \
  libsqlite3-dev \
  libssl-dev \
  libcurl4-openssl-dev \
  libonig-dev
cd php-src
./buildconf
./configure --prefix=/usr/local/php --with-config-file-path=/usr/local/php/etc
make -j$(nproc)
sudo make install
```