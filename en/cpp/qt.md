# qt

install
```sh
sudo apt -y install qtcreator qt5-default qtdeclarative5-dev build-essential qttools5-dev-tools
```

install dtk
```sh
sudo apt -y install libdtkcore-dev libdtkgui-dev libdtkwidget-dev
```

install libdtkwidget source code
```sh
sudo apt source libdtkwidget2
```

install qt6
```sh
sudo apt install qt6-base-dev qt6-base-dev-tools
```

find qt6
```sh
find /usr -name qmake | grep qt6
```

change qmake to 6

```sh
sudo mv /usr/bin/qmake /usr/bin/qmake.bak
sudo ln -s /usr/lib/qt6/bin/qmake /usr/bin/qmake
```

see version is change
```sh
qmake --version
```