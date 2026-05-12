# install

install

```sh
sudo apt install libjavascriptcoregtk-4.1-dev libwebkit2gtk-4.1-dev pkg-config
bun create tauri-app
```

run
```sh
bun create rsbuild my-tauri-app --template vue
cd my-tauri-app
bun install
bun install
bun run tauri dev
```

build
```sh
wget https://github.com/linuxdeploy/linuxdeploy/releases/download/continuous/linuxdeploy-x86_64.AppImage
chmod +x linuxdeploy-x86_64.AppImage
sudo mv linuxdeploy-x86_64.AppImage /usr/local/bin/linuxdeploy
bun run build
bun run tauri build
```