# ollma

install

```sh
curl -fsSL https://ollama.com/install.sh | sh
```

get model

```sh
ollama run llama3.3
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
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always dyrnq/open-webui:main
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
default save path
```sh
cd /usr/share/ollama/.ollama/
vi config.json
```

add config
```sh
{
    "api_key": "123456"
}
```

reload service

```sh
sudo systemctl daemon-reload
sudo systemctl restart ollama.service
ps aux | grep ollama
```

nginx cofig

```sh
server {
    listen 8088;
    server_name yourdomain.com;  # 替换为你的域名或IP地址

    # 设置一个密钥认证
    location / {
        # 检查请求头中的 Authorization 是否包含正确的 Bearer Token
        if ($http_authorization != "Bearer sdf455ERdhHy") {
            return 401 "Unauthorized";  # 如果密钥不匹配，返回 401 错误
        }

        # 配置反向代理
        proxy_pass http://127.0.0.1:11434;  # 将请求转发到 Ollama 服务
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_read_timeout 90;
    }
}
```
