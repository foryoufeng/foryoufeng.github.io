# install 

https://www.charlesproxy.com/download/

* register

https://inused.github.io/pages/file/tool/CharlesKeygen.html

ubuntu install Root Cert

```shell
cd  ~/.charles/ca
openssl x509 -outform der -in charles-proxy-ssl-proxying-certificate.pem -out charles-proxy-ssl-proxying-certificate.crt

sudo mkdir -p /usr/share/ca-certificates/charles

sudo cp -rf ~/.charles/ca/charles-proxy-ssl-proxying-certificate.crt /usr/share/ca-certificates/charles/

sudo vi /etc/ca-certificates.conf
# add the command line
charles/charles-proxy-ssl-proxying-certificate.crt

sudo update-ca-certificates
```
