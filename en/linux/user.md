# user

see linux user
```sh
cat /etc/passwd
```

see password save file

```sh
cat /etc/shadow
```

see user group 
```sh
cat /etc/group
```

give user no password to run sudo

```sh
sudo visudo
# add current user to the file and ctrl + o to save
your_username ALL=(ALL) NOPASSWD:ALL
```

5.管理 Sudo 权限
5.1 添加用户到 Sudo 组

```sh
useradd www
```

add group 

```sh
usermod -aG sudo www
```
            
5.2 编辑sudo权限
```sh
visudo
或者
vi /etc/sudoers
```
            
在文件中添加,加入NOPASSWD不需要输入密码
```sh
www ALL=(ALL) NOPASSWD:ALL
```

shell add user

```sh
#!/bin/bash

# 检查是否以 root 用户运行
if [[ $EUID -ne 0 ]]; then
   echo "请以 root 用户运行此脚本。" 
   exit 1
fi

# 添加 www 用户并创建 home 目录
if id "www" &>/dev/null; then
    echo "用户 www 已存在"
else
    useradd -m -s /bin/bash www
    echo "用户 www 创建成功"
fi

# 添加 www 用户到 sudo 组
usermod -aG sudo www
echo "已将 www 添加到 sudo 用户组"

echo "www ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/www
chmod 0440 /etc/sudoers.d/www
echo "已配置 www 用户免密码使用 sudo"

# 修改 sshd_config 中的 PasswordAuthentication 为 no
SSHD_CONFIG="/etc/ssh/sshd_config"
if grep -q "^PasswordAuthentication" "$SSHD_CONFIG"; then
    sed -i 's/^PasswordAuthentication.*/PasswordAuthentication no/' "$SSHD_CONFIG"
else
    echo "PasswordAuthentication no" >> "$SSHD_CONFIG"
fi
echo "已修改 sshd_config 禁用密码登录"

# 禁止 root 登录
if grep -q "^PermitRootLogin" "$SSHD_CONFIG"; then
    sed -i 's/^PermitRootLogin.*/PermitRootLogin no/' "$SSHD_CONFIG"
else
    echo "PermitRootLogin no" >> "$SSHD_CONFIG"
fi
echo "已设置 PermitRootLogin 为 no"

# 重启 ssh 服务
if systemctl list-unit-files | grep -q 'ssh.service'; then
    systemctl restart ssh
    echo "SSH 服务已重启"
elif systemctl list-unit-files | grep -q 'sshd.service'; then
    systemctl restart sshd
    echo "SSHD 服务已重启"
else
    echo "找不到 SSH 服务，可能未安装 OpenSSH Server"
fi
```

last login
```sh
last -F | tac
```