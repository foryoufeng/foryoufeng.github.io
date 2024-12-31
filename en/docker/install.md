# install

* ubuntu
```
sudo systemctl enable docker
sudo systemctl restart docker
```

* install docker compose

```
sudo apt install docker-compose-plugin
```

* add user to docker group

```sh
sudo usermod -aG docker ubuntu
newgrp docker
```