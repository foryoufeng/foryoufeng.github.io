# install

```sh
sudo apt install qtbase5-dev qtbase5-dev-tools qt5-qmake -y
sudo apt install lxqt-build-tools -y
sudo apt install libcmark-dev libuchardet-dev libjsoncpp-dev qtscript5-dev libicu-dev libxi-dev clang libclang-dev libjson-c-dev libdbus-1-dev libkf5syntaxhighlighting-dev libyaml-cpp-dev -y
sudo ln -s /usr/lib/x86_64-linux-gnu/pkgconfig/uchardet.pc /usr/lib/pkgconfig/chardet.pc
pkg-config --modversion chardet
cmake -B build -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release
sudo cmake --build build --target install -- -j$(nproc)
```