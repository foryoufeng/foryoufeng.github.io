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
cd /etc/update-motd.d/
sudo chmod -x /etc/update-motd.d/*
sudo vi /etc/issue
```

see linux kernel

```sh
uname -a
cat /proc/version
```