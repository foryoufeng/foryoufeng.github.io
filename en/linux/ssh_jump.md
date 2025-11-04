# ssh jump

generate key
```sh
ssh-keygen -t ed25519 -C "shopssh@ibiall.com"
```


```sh
vi ~/.ssh/config
```

add config
```sh
Host vpn
    HostName 10.0.0.2
    User www
```

copy file
```sh
scp -r bin/ vpn:/var/www/go/quote
```