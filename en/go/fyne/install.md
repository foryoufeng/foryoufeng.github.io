# fyne 

install
```sh
sudo apt update
sudo apt install -y \
    libgl1-mesa-dev \
    xorg-dev \
    libxcursor-dev \
    libxrandr-dev \
    libxinerama-dev \
    libxi-dev \
    libxxf86vm-dev
```

build
```sh
fyne package -os linux -icon myapp.png -release
```