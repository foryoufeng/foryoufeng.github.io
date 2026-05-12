# ollama config


docker compose config

```sh
services:
  ollama:
    image: dhub.kubesre.xyz/ollama/ollama:latest
    container_name: ollama
    ports:
      - "11434:11434" 
    volumes:
      - ./ollama:/root/.ollama  
    restart: always
    runtime: nvidia  
    gpus:
      - driver: nvidia 
        count: all  
        capabilities: ["gpu"]
```