# install

jdk1.8

```sh
sudo apt install openjdk-8-jre
#install 21
sudo apt install openjdk-21-jre
java -version
# see installed JRE and select the version
sudo update-alternatives --config java
```

install maven

```sh
sudo apt install maven -y
mvn -version
```

config maven
```
cd ~/.m2/
vi settings.xml
```

install tomcat

```sh
sudo groupadd tomcat
sudo useradd -s /bin/false -g tomcat -d /opt/tomcat tomcat
curl -O https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.56/bin/apache-tomcat-9.0.56.tar.gz
sudo tar xzvf apache-tomcat-9*tar.gz -C /opt/tomcat --strip-components=1

```
