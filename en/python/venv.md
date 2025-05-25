# venv

```sh
sudo apt update -y
sudo apt install python3 -y
sudo apt install python3-pip -y
sudo apt install python3-venv -y
sudo ln -sf /usr/bin/python3 /usr/bin/python
mkdir demo
cd demo
python -m venv venv
source venv/bin/activate
```

export package info
```sh
pip freeze > requirements.txt
```