# install

install package
```sh
sudo apt update
sudo apt install -y wget apt-transport-https software-properties-common
wget https://packages.microsoft.com/config/debian/12/packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
```

install .net
```sh
sudo apt update
sudo apt install -y dotnet-sdk-8.0
```

verify installation

```sh
dotnet --version
```