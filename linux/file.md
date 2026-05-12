# file

file permission

```sh
ll -al
```

```sh
drwxr-xr-x 48 ubuntu     ubuntu      4096 Feb  2 21:22 ubuntu/
```

explain it 

```sh
drwxr-xr-x
d - This means that it is a directory
r - This means that it is readable, number is 4
w - This means that it is writable, number is 2
x - This means that it is executable, number is 1,if is directory then this means it is can access the directory
fisrt is owner's permissions,sencond is grou's permissions,the third is for others

48
this is file connect i-node numbers

ubuntu 
This means the directory owner

ubuntu 
This means the directory group

Feb  2 21:22
This means the directory modifitied time

ubuntu/
This the directory name
```

file type

```sh
1. basic file, such as 1.txt
2. binary file, such as a.so
3. data file, such as wtmp
4. directory 
5. link file, use ln to link file or directory
6. device, most time it is in the /dev directory
 
```

directory

```sh
/bin  -> /usr/bin
/boot Liunx kernel file
/dev  device 
/etc  system config
/home user home 
/lib  system library
/lost+found  while system close happen
/media  U disk
/mnt  system mount directory 
/opt  install some soft
/proc  virtual file system
/root  root home
/sbin  system bin
/usr   unix system resource,many core commands
/var  files,such as logs,websites

```