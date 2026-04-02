# gui

install 
```sh
sudo apt update
sudo apt install xfce4 xfce4-goodies -y
sudo apt install xrdp -y
sudo systemctl enable xrdp
sudo systemctl start xrdp
echo xfce4-session > ~/.xsession
sudo ufw allow 3389
```


