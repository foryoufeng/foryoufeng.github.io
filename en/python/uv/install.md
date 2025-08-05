# install

```sh
sudo apt update
sudo apt install pipx -y
pipx install uv
pipx ensurepath
```

set virtual environment
```sh
uv venv
source .venv/bin/activate
```

install dependencies

```sh
uv sync
```

install package 

```sh
uv add python-dotenv
```

sync

```sh
uv sync
```

config mirror

```sh
mkdir -p ~/.config/uv/
vi ~/.config/uv/config.toml
```

add mirror

```sh
[[index]]
name = "tuna"
url = "https://pypi.tuna.tsinghua.edu.cn/simple"
default = true
```