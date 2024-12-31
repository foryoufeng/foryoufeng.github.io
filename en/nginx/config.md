# config

steam

```sh
stream {
    server {
       listen 3308; 
       proxy_connect_timeout 5s;
       proxy_timeout 10s;
       proxy_pass 127.0.0.1:7507;    
    }
}
```


http

```sh
server {
    listen 80;
    server_name a.com;
    root /home/Documenst/docs/html/;
    index index.html index.htm;
    location / {
        try_files $uri $uri/ =404;
    }
}
```
