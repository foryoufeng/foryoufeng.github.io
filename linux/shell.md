# shell 

set alias ,login shell will use file .bash_profile and load .bashrc with login

```sh
vi ~/.bash_profile
```

edit the file

```sh
alias ls='ls --color=auto'
alias vb='vi ~/.bash_profile'
alias sb='source ~/.bash_profile'

if [ -f ~/.bashrc ]; then
    source ~/.bashrc
fi
```

get git project shell

```sh
#!/bin/bash

current_path=$(pwd)
DIR="git_project"
FILE_PATH="$current_path/$DIR"
if [ ! -d "$FILE_PATH" ]; then
  mkdir "$FILE_PATH"
fi
# Function to get directory name from repository URL
get_dir_name() {
  local repo_url="$1"
  repo_name="${repo_url##*/}"
  repo_name="${repo_name%.git}"
  echo "$repo_name"
}
# Function to clone or pull a repository
update_repo() {
  local dir="$1"
  local repo_url="$2"
  local dir_name
  dir_name=$(get_dir_name "$repo_url")
  cd "$dir"|| exit
  if [ -d "$dir/$dir_name" ]; then
    git pull
    echo "Updated the repository: $dir_name"
  else
    git clone "$repo_url"
    echo "Cloned the repository: $dir_name"
  fi
}
# get git project
projects=(
   'git@github.com:laravel/vite-plugin.git'
   'git@github.com:laravel/framework.git'
)
for item in "${projects[@]}"; do
    update_repo "$FILE_PATH" "$item"
done

```

data input and output

```sh
find /home -name .bashrc 2> /dev/null
ls aa || mkdir aa && touch aa/1.txt
```

if 
```sh
read -p "Please input" yn
if ["${yn} == ""Y]; then
   echo "Ok"
elif ["${yn}" == "N"] ; then
   echo "No"
else
   echo "undefined"   
fi
```

function
```sh
function aa(){
   echo "hello $1"
}
aa bob
```

keymap 
```sh
Ctrl + L  clear screen and to first line
```