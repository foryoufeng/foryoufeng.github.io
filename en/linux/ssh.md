# ssh

scp 

```sh
scp a www@192.168.54.100:/home/www/
```

config

```sh
ssh-keygen -t rsa -b 4096 -f ~/.ssh/ub
ssh-keygen -t rsa
touch config
//add config
Host
Host ub
    HostName remote-server-ip
    User username
    Port 22
    IdentityFile ~/.ssh/ub
chmod 700 ~/.ssh
chmod 600 ~/.ssh/ub
```

add file to serve

```sh
cat ~/.ssh/ub.pub | ssh ubuntu@remote-server-ip 'mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys'
```

close password login

```sh
sudo vi /etc/ssh/sshd_config
//change password login no
PasswordAuthentication no
```