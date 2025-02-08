# ollama

地址：[https://ollama.com/](https://ollama.com/)

install

```sh
curl -fsSL https://ollama.com/install.sh | sh
```

get model

```sh
ollama run deepseek-r1:14b
```

install nvidia docker 

```sh
curl -s -L https://nvidia.github.io/libnvidia-container/gpgkey | sudo apt-key add -
curl -s -L https://nvidia.github.io/libnvidia-container/ubuntu20.04/libnvidia-container.list | \
sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
sudo apt-get update
sudo apt-get install -y nvidia-container-toolkit
sudo nvidia-ctk runtime configure
sudo systemctl restart docker
docker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi
ollama run llama3.3
//see gpu use
nvidia-smi
```

install open-webui

```sh
docker run -d -p 3000:8080  -v open-webui:/app/backend/data --name open-webui dyrnq/open-webui
```

use docker-compose

```sh
services:
  open-webui:
    image: dyrnq/open-webui:main
    container_name: open-webui
    restart: always
    ports:
      - "3000:8080"
    volumes:
      - open-webui:/app/backend/data
    extra_hosts:
      - "host.docker.internal:host-gateway"
    environment:
      - OLLAMA_API_BASE_URL=http://host.docker.internal:11434
    networks:
      - my-network
networks:
  my-network:
    driver: bridge

volumes:
  open-webui:
```

ollama config

```sh
sudo vi /etc/systemd/system/ollama.service
```

edit service
```sh
[Unit]
Description=Ollama Service
After=network-online.target

[Service]
ExecStart=/usr/local/bin/ollama serve
User=ollama
Group=ollama
Restart=always
RestartSec=3
Environment="PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin"

[Install]
WantedBy=default.target
```


reload service

```sh
sudo systemctl daemon-reload
sudo systemctl restart ollama.service
ps aux | grep ollama
```
 
chat ui

[open-webui](https://github.com/open-webui/open-webui)

[MaxKB](https://github.com/1Panel-dev/MaxKB)


ai助手

[https://github.com/ibiteam/assistant](https://github.com/ibiteam/assistant)

