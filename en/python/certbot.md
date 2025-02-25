# certbot

install

```sh
sudo apt install python3.12-venv
python3 -m venv certbot_env
source certbot_env/bin/activate
pip install certbot certbot-nginx
```

run get https

```sh
sudo /home/www/certbot_env/bin/certbot --nginx -d www.mythinkshop.cn
```

add crontab 
```sh
crontab -e

0 0,12 * * * sudo /home/www/certbot_env/bin/certbot renew --quiet

```

install by apt

```sh
sudo apt install certbot python3-certbot-nginx -y
//if install
certbot --version
```

install nginx
```sh
sudo certbot --nginx
```