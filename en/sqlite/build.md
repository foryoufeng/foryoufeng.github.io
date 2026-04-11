# build

compile

```sh
sudo apt install build-essential wget tcl -y
./configure
make -j$(nproc)
```

for small

```sh
CFLAGS="-Os -DNDEBUG" ./configure
make -j$(nproc)
strip sqlite3
```