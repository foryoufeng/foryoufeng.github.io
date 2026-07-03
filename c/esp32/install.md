
```sh
sudo apt install python3-venv -y
```

```sh
mkdir -p ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
python -m venv venv
source venv/bin/activate
./install.sh esp32s3
. ./export.sh
cd examples/get-started/hello_world/
idf.py set-target esp32s3
idf.py build
idf.py -p /dev/ttyACM0 build flash monitor
```