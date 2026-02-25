# learn

install python
```sh
sudo apt install python3-pip
```

install rosdep
```sh
pip3 install rosdepc
sudo rosdepc init
rosdepc update
rosdepc install -i --from-path src --rosdistro humble -y
sudo apt install python3-colcon-ros
pip3 install empy catkin_pkg lark lark-parser pyparsing
colcon build --cmake-args -DPYTHON_EXECUTABLE=/usr/bin/python3
source install/local_setup.sh
```

run 
```sh
mkdir src
cd src
ros2 pkg create --build-type ament_cmake learning_c
ros2 pkg create --build-type ament_python learning_c_python
ros2 run learning_node node_helloworld
sudo apt install python3-opencv
ros2 run learning_node node_object
```