# install


window clion config

```sh
File → Settings → Build, Execution, Deployment → CMake
```

in “CMake options” add
```sh
-DCMAKE_PREFIX_PATH="C:\Qt\6.6.3\mingw_64"
```

use Maintenance Too to install module
```sh
C:\Qt\MaintenanceTool.exe
```

```sh
C:\Qt\6.9.3\mingw_64\bin\windeployqt.exe ship.exe
```