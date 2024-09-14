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
