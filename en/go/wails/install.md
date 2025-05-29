# install wails

```sh
go install github.com/wailsapp/wails/v2/cmd/wails@latest
export PATH=$PATH:$(go env GOPATH)/bin
sudo apt install libgtk-3-dev -y
sudo apt install libwebkit2gtk-4.0-dev -y
```

create project

```sh
wails init -n wails-chat -t vue-ts
```