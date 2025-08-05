# elasticsearch

install

```sh
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.19.0-amd64.deb
sudo dpkg -i elasticsearch-8.19.0-amd64.deb
sudo systemctl enable elasticsearch
sudo systemctl start elasticsearch
sudo systemctl status elasticsearch
```

see if it install success
```sh
curl -k https://localhost:9200 -u elastic
```

| config         | path                                   |
|----------------|----------------------------------------|
| main config    | `/etc/elasticsearch/elasticsearch.yml` |
| path           | `/etc/elasticsearch/jvm.options`       |
| data directory | `/var/lib/elasticsearch`               |
| log  directory | `/var/log/elasticsearch`               |
