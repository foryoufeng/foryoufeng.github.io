# install

```sh
sudo apt update
sudo apt install -y locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
```

source-based ROS 2 install
```sh
sudo apt install -y \
  build-essential \
  cmake \
  git \
  python3-pip \
  python3-setuptools \
  python3-wheel
```
use pip to install
```sh
# 1. Create a venv for ROS 2
python3 -m venv ~/ros2_humble/venv

# 2. Activate it
source ~/ros2_humble/venv/bin/activate

# 3. Upgrade pip
pip install --upgrade pip

# 4. Install the ROS 2 tools inside venv
pip install \
  rosdep \
  colcon-common-extensions \
  vcstool \
  argcomplete

```

init rosdep
```sh
sudo /home/wuqiang/ros2_humble/venv/bin/rosdep init
export ROS_OS_OVERRIDE=debian
rosdep update
rosdep install --from-paths ~/ros2_humble/src --ignore-src -r -y --rosdistro humble
cd src
wget https://raw.githubusercontent.com/ros2/ros2/humble/ros2.repos
vcs import < ros2.repos
cd ~/ros2_humble
colcon build --symlink-install --parallel-workers $(nproc)
```

add source
```sh
source ~/ros2_humble/install/setup.bash
echo "source ~/ros2_humble/venv/bin/activate" >> ~/.bashrc
echo "export ROS_OS_OVERRIDE=debian" >> ~/.bashrc
echo "source ~/ros2_humble/install/setup.bash" >> ~/.bashrc
```