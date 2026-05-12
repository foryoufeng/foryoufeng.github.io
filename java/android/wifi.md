# wifi connect

mac add adb to class path

```sh
export PATH="$PATH:$HOME/Library/Android/sdk/platform-tools"
```

connect mobile

```sh
 adb tcpip 5555;
 //see the mobile ip address
 adb shell ifconfig wlan0
 //connect mobile
 adb connect 192.168.1.106
```