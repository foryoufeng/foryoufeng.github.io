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

conf


```sh
worker_process 1;

events {
  worker_connections 1024;
}

http {
  include mime.types;
  default_type application/octet-stream;
  
  sendfile on;
  
  keepalive_timeout 65;
  
  server{
    listen 80;
    server_name localhost;
    
    location / {
      root  html;
      index index.html index.htm;
    }
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
      root html;
    }
  }
}
```

upstream


```sh
http{
  
  upstream a{
    server 127.0.0.1:81 weight=8;
    server 127.0.0.1:82 weight=2;
  }
  server {
       listen 3308; 
       server_name localhost;
       location / {
           proxy_connect_timeout 5s;
           proxy_timeout 10s;
           proxy_pass http://a; 
       }
       location ~*(css|img|js) {
         valid_referers none  192.168.44.101;
         if($invalid_referer){
            return 403;
         }
         root /var/www/html;
         index index.html;
       }
       }   
    }
  
}
```