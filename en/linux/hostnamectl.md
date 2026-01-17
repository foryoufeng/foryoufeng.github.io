# hostnamectl 

```sh
sudo hostnamectl set-hostname moodoodoo
```

update `/etc/hosts`
```sh
sudo vi /etc/hosts
```

add config
```sh
127.0.1.1   moodoodoo
```

Apply immediately

```sh
exec bash
```