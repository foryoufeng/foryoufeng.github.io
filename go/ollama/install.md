# ollama

install 

```sh
curl -fsSL https://ollama.com/install.sh | sh
```

install by source code

```sh
wget http://cdn.mythinkshop.cn/ollama-linux-amd64.tgz
sudo tar -C /usr -xzf ollama-linux-amd64.tgz

```
add user
```sh
sudo useradd -r -s /bin/false -U -m -d /usr/share/ollama ollama
sudo usermod -a -G ollama $(whoami)
```

add service in `/etc/systemd/system/ollama.service`

```sh
sudo vi /etc/systemd/system/ollama.service
```

add config

```sh
[Unit]
Description=Ollama Service
After=network-online.target

[Service]
ExecStart=/usr/bin/ollama serve
User=ollama
Group=ollama
Restart=always
RestartSec=3
Environment="PATH=$PATH"

[Install]
WantedBy=default.target
```

Then start the service:

```sh
sudo systemctl daemon-reload
sudo systemctl enable ollama
sudo systemctl start ollama
sudo systemctl status ollama
```


see models

```sh
ollama list
```

run model

```sh
ollama run deepseek-r1:1.5b
```


install models by files

```sh

```