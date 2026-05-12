# package 

install

```sh
go install fyne.io/tools/cmd/fyne@latest
```

package xz

```sh
fyne package -os linux --name nginxapp --icon nginx.png --app-id com.nginxapp
```

install fpm

```sh
sudo apt update
sudo apt install ruby ruby-dev build-essential -y
sudo gem install --no-document fpm
```

fpm package to deb

```sh
fpm -s tar -t deb -n nginxapp -v 1.0.0 nginxapp.tar.xz
```

install
```sh
sudo dpkg -i nginxapp.deb
```

remove
```sh
sudo dpkg -r nginxapp
```