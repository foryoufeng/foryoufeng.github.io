# Flutter

install
```sh
sudo apt-get update -y && sudo apt-get upgrade -y;
sudo apt-get install -y curl git unzip xz-utils zip libglu1-mesa
sudo apt install cmake ninja-build clang libgtk-3-dev liblzma-dev
sudo apt-get install \
      clang cmake git \
      ninja-build pkg-config \
      libgtk-3-dev liblzma-dev \
      libstdc++-12-dev
```

add to path
```sh
tar -xf ~/Downloads/flutter_linux_3.32.8-stable.tar -C ~/flutter/
echo 'export PATH="$HOME/flutter/flutter/bin:$PATH"' >> ~/.bash_profile
source ~/.bashrc
```


see version
```sh
flutter --version
dart --version
```

dart sdk path
```sh
ls flutter/bin/cache/dart-sdk/bin
```

set support
```sh
flutter config --enable-linux-desktop
```