# go config

```sh
shipchat.ibisaas.com {

    # 自动 HTTPS（Caddy 默认）
    encode gzip

    # ===============================
    # 1️⃣ Vue 前端静态文件
    # ===============================
    root * /var/www/ship/dist
    file_server

    # 支持 Vue Router history 模式
    try_files {path} /index.html

    # ===============================
    # 2️⃣ Go 后端 API 反向代理
    # ===============================
    @api path /api/* 
    reverse_proxy @api 127.0.0.1:8084 {
        header_up Host {host}
        header_up X-Real-IP {remote_host}
        header_up X-Forwarded-For {remote_host}
        header_up X-Forwarded-Proto {scheme}
    }

    # ===============================
    # 3️⃣ WebSocket 反向代理
    # ===============================
    @ws path /ws*
    reverse_proxy @ws 127.0.0.1:8084 {
        header_up Host {host}
        header_up X-Real-IP {remote_host}
        header_up X-Forwarded-For {remote_host}
        header_up X-Forwarded-Proto {scheme}
        transport http {
            versions h1 h2c
        }
    }

    # ===============================
    # 4️⃣ 日志配置（可选）
    # ===============================
    log {
        output file /var/log/caddy/shipchat.access.log
        format single_field common_log
    }

    handle_errors {
        respond "{http.error.status_code} {http.error.status_text}" 500
    }
}

```