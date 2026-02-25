# satis

install
```sh
git clone git@github.com:composer/satis.git
cd satis
composer install
```

add `satis.json`
```sh
{
    "name": "local/mirror",
    "homepage": "http://composer.dv",
    "repositories": [
        { "type": "composer", "url": "https://packagist.org" }
    ],
    "require": {
        "alibabacloud/dyvmsapi-20170525": "^3.2",
        "alibabacloud/sdk": "^1.8",
        "alibabacloud/sts-20150401": "^1.1",
        "aliyunmq/mq-http-sdk": "^1.0",
        "alphasnow/aliyun-oss-laravel": "^4.7",
        "barryvdh/laravel-dompdf": "^2.0",
        "datarangers/datarangers": "^1.0",
        "doctrine/dbal": "^4.1",
        "elasticsearch/elasticsearch": "^7.10.0",
        "glushkovds/phpclickhouse-laravel": "^2.3",
        "gregwar/captcha": "^1.1",
        "guzzlehttp/guzzle": "^7.8",
        "intervention/image": "^2.4",
        "larafly/apidoc": "^1.1",
        "larafly/feishu": "^1.2",
        "laravel/framework": "^11.0",
        "laravel/tinker": "^2.5",
        "league/flysystem-sftp": "^3.0",
        "league/flysystem-ziparchive": "^3.0",
        "lpilp/guomi": "^1.0",
        "maatwebsite/excel": "^3.1",
        "mdanter/ecc": "1.0",
        "monolog/monolog": "^3.7",
        "overtrue/easy-sms": "^1.0",
        "overtrue/laravel-filesystem-qiniu": "^2.3",
        "overtrue/laravel-wechat": "^7.3",
        "overtrue/pinyin": "~3.0",
        "php-amqplib/php-amqplib": "^3.1",
        "phpoffice/phpword": "^1.0",
        "predis/predis": "^1.1",
        "prettus/l5-repository": "^2.9.1",
        "simplesoftwareio/simple-qrcode": "^2.0",
        "spatie/laravel-fractal": "^6.2",
        "spatie/laravel-permission": "^6.4",
        "stomp-php/stomp-php": "^5.0",
        "tencent/tls-sig-api-v2": "^1.0",
        "w7corp/easywechat": "^6.7",
        "wechatpay/wechatpay": "^1.4",
        "wubuwei/php-apple-signin": "^2.0"
    },
    "archive": {
        "directory": "dist",
        "format": "zip"
    }
}

```

run

```sh
bin/satis build satis.json public/
```

config satis

```sh
composer config -g repo.packagist composer http://composer.dv
composer config -g secure-http false
```

add online server

```sh
{
    "name": "composer/mirror",
    "homepage": "https://esports.ibisaas.com/",
    "repositories": [
        { "type": "composer", "url": "https://packagist.org" }
    ],
    "require": {
        "alibabacloud/dyvmsapi-20170525": "^3.2",
        "alibabacloud/sdk": "^1.8",
        "alibabacloud/sts-20150401": "^1.1",
        "aliyunmq/mq-http-sdk": "^1.0",
        "alphasnow/aliyun-oss-laravel": "^4.7",
        "barryvdh/laravel-dompdf": "^2.0",
        "datarangers/datarangers": "^1.0",
        "doctrine/dbal": "^4.1",
        "elasticsearch/elasticsearch": "^7.10.0",
        "glushkovds/phpclickhouse-laravel": "^2.3",
        "gregwar/captcha": "^1.1",
        "guzzlehttp/guzzle": "^7.8",
        "intervention/image": "^2.4",
        "larafly/apidoc": "^1.1",
        "larafly/feishu": "^1.2",
        "laravel/framework": "^11.0",
        "laravel/tinker": "^2.5",
        "league/flysystem-sftp": "^3.0",
        "league/flysystem-ziparchive": "^3.0",
        "lpilp/guomi": "^1.0",
        "maatwebsite/excel": "^3.1",
        "mdanter/ecc": "1.0",
        "monolog/monolog": "^3.7",
        "overtrue/easy-sms": "^1.0",
        "overtrue/laravel-filesystem-qiniu": "^2.3",
        "overtrue/laravel-wechat": "^7.3",
        "overtrue/pinyin": "~3.0",
        "php-amqplib/php-amqplib": "^3.1",
        "phpoffice/phpword": "^1.0",
        "predis/predis": "^1.1",
        "prettus/l5-repository": "^2.9.1",
        "simplesoftwareio/simple-qrcode": "^2.0",
        "spatie/laravel-fractal": "^6.2",
        "spatie/laravel-permission": "^6.4",
        "stomp-php/stomp-php": "^5.0",
        "tencent/tls-sig-api-v2": "^1.0",
        "w7corp/easywechat": "^6.7",
        "wechatpay/wechatpay": "^1.4",
        "wubuwei/php-apple-signin": "^2.0",
        "composer/composer": "^2.9.4",
        "composer-plugin-api": "^2.3.0",
        "symfony/console": "^7.4.4",
        "twig/twig": "^3.23.0",
        "twig/html-extra": "^3.23.0"
    },
    "archive": {
        "directory": "dist",
        "format": "zip"
    }
}
```

config
```sh
composer config -g repo.packagist composer https://esports.ibisaas.com
```

config nginx
```sh
server{
    listen       80;
    server_name  esports.ibisaas.com;
    root /var/www/satis/public;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}

```