# Flask document

install
```sh
pip install Flask gunicorn
```

create file app.py ,add content

```sh
from flask import Flask

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello():
  return "hello"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

run
```sh
unicorn --workers 3 --bind 0.0.0.0:5000 app:app &
```

add service,`sudo vi /etc/systemd/system/grok.service`
```sh
[Unit]
Description=Gunicorn instance for Flask app
After=network.target

[Service]
User=www
Group=www
WorkingDirectory=/home/www/web
ExecStart=/home/www/web/venv/bin/gunicorn --workers 3 --bind 0.0.0.0:5000 app:app
Restart=always

[Install]
WantedBy=multi-user.target
```

enable service
```sh
sudo systemctl daemon-reload
sudo systemctl restart grok
sudo systemctl status grok
```