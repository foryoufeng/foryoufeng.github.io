# supervisord

install 
```sh
pip install supervisor

```

start 
```sh
sudoo service supervisord start
```

ubuntu install

```sh
sudo apt install supervisor
sudo systemctl start supervisor
sudo systemctl enable supervisor
cd /etc/supervisor/conf.d/
# add config
sudo supervisorctl reload
sudo systemctl status supervisor
```

config chat.conf
```sh
[program:chat-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/laravel-chat/artisan queue:work --sleep=3 --tries=3 --queue=chat
autostart=true
autorestart=true
user=www
numprocs=2
redirect_stderr=true
stdout_logfile=/var/www/laravel-chat/storage/logs/worker.log


[program:laravel-chat-im]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/laravel-chat/artisan  worker start
autostart=true
autorestart=true
user=www
numprocs=1
redirect_stderr=true
stdout_logfile=/var/www/laravel-chat/storage/logs/worker.log
```


