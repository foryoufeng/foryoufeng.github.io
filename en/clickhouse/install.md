# install

* ubuntu

```sh
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg
curl -fsSL 'https://packages.clickhouse.com/rpm/lts/repodata/repomd.xml.key' | sudo gpg --dearmor -o /usr/share/keyrings/clickhouse-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/clickhouse-keyring.gpg] https://packages.clickhouse.com/deb stable main" | sudo tee \
    /etc/apt/sources.list.d/clickhouse.list
sudo apt-get update
sudo apt-get install -y clickhouse-server clickhouse-client
sudo systemctl enable clickhouse-server
sudo systemctl start clickhouse-server
sudo systemctl status clickhouse-server
# see clickhouse version
clickhouse-client --version
```

## config

```sh
sudo vi /etc/clickhouse-server/config.xml
# add user in <users> node
<admin>
        <password>123456</password>
        <profile>default</profile> 
        <quota>default</quota>
        <networks>
            <ip>::/0</ip>
        </networks>
</admin>
# restart
sudo systemctl restart clickhouse-server
```
