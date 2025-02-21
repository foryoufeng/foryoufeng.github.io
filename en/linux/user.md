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
username ALL=(ALL) NOPASSWD:ALL
```

