# desktop

# create desktop file such as phpstorm.desktop

```sh
[Desktop Entry]
Type=Application
Name=phpstorm
Exec=/home/wuqiang/Desktop/PhpStorm-2024.2.2/PhpStorm-242.22855.113/bin/phpstorm
Icon=/home/wuqiang/Desktop/PhpStorm-2024.2.2/PhpStorm-242.22855.113/bin/phpstorm.svg
StartupWMClass=jetbrains-phpstorm
```

# add to the path or `/usr/share/applications`

```sh
cd ~/.local/share/applications
```

# if when program not show icon while can run command and click the run application

```sh
xprop WM_CLASS
```

get the app name and add it to dektop

```sh
StartupWMClass=jetbrains-phpstorm
```

> refence articel [https://fosscope.com/20240621-fixing-applications-icon-missing-from-the-launcher-in-ubuntu/](https://fosscope.com/20240621-fixing-applications-icon-missing-from-the-launcher-in-ubuntu/)