# cmake

install

```sh
sudo apt install cmake
cmake --version
```

use
```sh
rm -rf cmake-build-debug
mkdir cmake-build-debug
cd cmake-build-debug
cmake ..
cmake --build .
```

CMakeLists.txt

```sh
# cmake version
cmake_minimum_required(VERSION 3.29)
# project
project(demo LANGUAGES CXX)
# set environment
set(CMAKE_CXX_STANDARD 23)
# set generate path
set(EXECUTABLE_OUTPUT_PATH ./aa/bb)
aux_source_directory(${PROJECT_SOURCE_DIR} SRC)
# build static library
add_library(mytest STATIC src/test.cpp)
# set lib directory
set(LIBRARY_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/lib)
# link static libs
link_libraries(mytest)
# set lib directory
link_directories(${PROJECT_SOURCE_DIR}/lib)
# link SHARED libs
add_library(mytest2 SHARED src/test.cpp)
# define 
add_definitions(-DDEBUG)
add_subdirectory(lib)
#add_executable(demo ${SRC})  
#include_directories(${PROJECT_SOURCE_DIR}/include)
# compile file
add_executable(demo
        src/main.cpp
) 
target_link_libraries(demo mytest2)
```