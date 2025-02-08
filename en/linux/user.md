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