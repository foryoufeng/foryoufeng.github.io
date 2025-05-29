# install

```sh
npm install -g pnpm
```

# run

```sh
pnpm install
```

* see store path
```sh
pnpm store path
# /home/wuqiang/.local/share/pnpm/store/v10
```

* find the real file

```sh
find ~/.local/share/pnpm/store/v10 -samefile node_modules/.pnpm/vue@3.5.13/node_modules/vue/index.js 2>/dev/null
```