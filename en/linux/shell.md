# shell 

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