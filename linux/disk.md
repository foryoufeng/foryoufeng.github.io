# disk

* see path file size

```sh
du -h /var/log
```

* see file size

```sh
ls -lh
```

* see disk

```sh
df -h
```

* get top 10

```sh
sudo du -ah /var/log | sort -rh | head -n 10
```

see part of disk

```sh
lsblk
```

see disk info

```sh
vi /etc/fstab
```

get current dir

```sh
du -h --max-depth=1 | sort -hr | head -10
```