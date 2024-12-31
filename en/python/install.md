# install

* ubuntu

```sh
sudo apt install python3 -y
sudo apt install python3-pip -y
mkdir ~/.pip
vi ~/.pip/pip.conf
# add config
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn
# see mirror address
pip3 config list

```

deepin

```sh
pip config set global.index-url https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple
```

install poetry
```sh
pip install poetry
poetry source add --priority=default mirrors https://pypi.tuna.tsinghua.edu.cn/simple/
poetry install
```

install different python version

```sh


```