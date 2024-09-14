# install

jdk1.8

```sh
sudo apt install openjdk-8-jre
java -version
```

install maven

```sh
sudo apt install maven -y
mvn -version
```

config maven


install tomcat

```sh
sudo groupadd tomcat
sudo useradd -s /bin/false -g tomcat -d /opt/tomcat tomcat
curl -O https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.56/bin/apache-tomcat-9.0.56.tar.gz
sudo tar xzvf apache-tomcat-9*tar.gz -C /opt/tomcat --strip-components=1

```
