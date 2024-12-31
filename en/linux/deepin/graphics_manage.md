# intall

```sh
sudo apt install build-essential cmake qt5-default -y
sudo apt-get install qt5-tools

```

driver download  https://www.nvidia.com/en-us/geforce/drivers/results/114708/#

change driver https://bbs.deepin.org/en/post/238766

stop display manager

```sh
sudo systemctl stop display-manager
```

Blacklist Nouveau Driver

```sh
sudo vi /etc/modprobe.d/blacklist-nouveau.conf
```
add the following lines:
```sh
blacklist nouveau
options nouveau modeset=0
```
Regenerate the initramfs:
```sh
sudo update-initramfs -u
sudo reboot
```

if use NVIDIA
```sh
pkexec apt install nvtop
```


