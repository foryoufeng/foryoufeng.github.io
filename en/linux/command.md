# common commands

open files by shell command
```sh
open .
```

move cursor
```sh
# move to first
Ctrl + a  
# move to end 
Ctrl + e
```

change last directory
```sh
cd -
```

systemctl

```sh
systemctl list-units --type=service --state=active |grep php
```

change linux shell login message
```sh
sudo vi /etc/motd
```

pwd : print working directory
```sh
pwd
```

mkdir: create dir
```sh
mkdir -p a/b/c/d
```

rmdir: remove dir
```sh
rmdir -p a/b/c
```

$PATH: linux system is use : to split
```sh
echo $PATH
```

more : see file 
```sh
more /etc/nginx/nginx.conf
```

less : see file and can up and down page

```sh
less /etc/man_db.conf
```

head: see file first lines
```sh
head -n 20 /etc/man_db.conf
```

tail : see file end lines
```sh
tail -n 20 /etc/man_db.conf
```

which: see command location

```sh
which ls
```