# fail2ban

install
```sh
sudo apt update
sudo apt install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
sudo systemctl status fail2ban
sudo fail2ban-client reload
```

config
```sh
sudo vi /etc/fail2ban/jail.local
```

add config
```sh
[DEFAULT]
# 封禁时长（秒）600 秒 = 10 分钟
bantime = 100d

# 查找时间（秒）：在这个时间范围内超过 maxretry 次将被封禁
findtime = 300

# 失败多少次封禁
maxretry = 2

# 封禁使用的防火墙方式（默认 iptables）
banaction = ufw

[sshd]
enabled = true
port    = ssh
logpath = /var/log/auth.log
backend = systemd
```

see disable ip
```sh
sudo fail2ban-client status
sudo fail2ban-client status sshd
```

manual disable ip
```sh
sudo fail2ban-client set sshd banip 1.2.3.4
```