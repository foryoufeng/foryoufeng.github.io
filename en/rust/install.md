# install

install

```sh
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
rustc -V
```

config
```sh
vi ~/.bashrc
# add config
export PATH="$HOME/.cargo/bin:$PATH"
source ~/.bashrc
```

mirror
```sh
vi ~/.cargo/config.toml
```

add config
```sh
[source.crates-io]
replace-with = 'tuna'

[source.tuna]
registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"
```

hello world
```sh
cargo new demo
```