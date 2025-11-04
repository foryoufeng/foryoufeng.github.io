# rsync

install
```sh

```

upload to server
```sh
rsync -avzP ./project/ user@remote:/home/user/project/
```


deploy
```sh
cd /var/www/go/quote
git pull origin main
make build
ssh vpn "mkdir -p /var/www/go/quote"
rsync -avzP  bin/ vpn:/var/www/go/quote
rsync -avzP  dist/ vpn:/var/www/go/quote/dist
ssh vpn "ssh go 'mkdir -p /var/www/go/quote/'"
ssh vpn "rsync -avzP  /var/www/go/quote/ go:/var/www/go/quote/"
```

