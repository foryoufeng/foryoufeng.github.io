# ufw

install
```sh
sudo apt install ufw
sudo ufw enable
//see detail
sudo ufw status verbose
```

allow ssh

```sh
sudo ufw allow ssh
```

open port
```sh
sudo ufw allow 80
```

allow ip access port

```sh
sudo ufw allow from  124.127.56.186 to any port 11434
```

see number
```sh
sudo ufw status numbered
//delete by id
sudo  ufw delete 2
```