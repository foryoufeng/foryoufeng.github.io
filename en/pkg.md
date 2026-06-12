/home/www/Documents/php/php-src/Release/bin

[Unit]
Description=The PHP FastCGI Process Manager
After=network.target

[Service]
Type=simple
ExecStart=/home/www/Documents/php/php-src/Release/sbin/php-fpm --php-ini /home/www/Documents/php/php-src/Release/php.ini --nodaemonize --fpm-config /home/www/Documents/php/php-src/Release/etc/php-fpm.conf 
ExecReload=/bin/kill -USR2 $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target



sudo vi /etc/systemd/system/packagist.service



[Unit]
Description=Packagist Process Manager
After=network.target

[Service]
Type=simple
ExecStart=/home/www/Documents/php/packagist/bin/console packagist:run-workers
ExecReload=/bin/kill -USR2 $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target


server {
        listen 80;

        server_name pkg.dv;
        client_max_body_size 50m;
        root "/home/wuqiang/Documents/php/packagist/web";
        index index.php;

        location / {
                try_files $uri $uri/ /index.php$is_args$args;
        }
        location ~ \.php$ {
                        try_files $uri /index.php =404;
                        fastcgi_pass unix:/home/wuqiang/Documents/php/php-src/Release/php8-fpm.sock;

                        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
                        fastcgi_param DOCUMENT_ROOT $realpath_root;

                        fastcgi_index index.php;
                        fastcgi_buffers 16 16k;
                        fastcgi_buffer_size 32k;
                        # fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                        fastcgi_read_timeout 600;
                        include fastcgi_params;
        }
        location ~ \.php$ {
                           return 404;
        }

        location ~ /\.(?!well-known).* {
                deny all;
        }
        access_log /home/wuqiang/Documents/php/packagist/var/log/packagist_access.log;
        error_log /home/wuqiang/Documents/php/packagist/var/log/packagist_error.log;


}
