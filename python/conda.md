# conda

create virtual environment

```sh
conda create --name myenv python=3.9
```

Activate the Environment

```sh
conda activate myenv
```

config china mirror

```sh
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2/
```

show config

```sh
conda config --show channels
```