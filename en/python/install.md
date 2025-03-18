# install

* ubuntu

```sh
sudo apt install python3 -y
sudo apt install python3-pip -y
mkdir ~/.pip
vi ~/.pip/pip.conf
```

### add config

```sh
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn
```

### see mirror address
```sh
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

upgrade python
```sh
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.12 python3.12-dev python3.12-venv
```

ln python
```sh
sudo mv /usr/bin/python /usr/bin/python.bak
sudo ln -sf /usr/bin/python3.12 /usr/bin/python
```

export package
```sh
pip freeze > requirements.txt
```