# basic

# for

```sh
DB_AWS_ZONE=('us-east-2a' 'us-west-1a' 'eu-central-1a')
 
for zone in "${DB_AWS_ZONE[@]}"
do
  echo "Creating rds (DB) server in $zone, please wait ..."
done
```

# git clone project

```sh
#!/bin/bash

DIR="git_project"
projects=(
   'git@github.com:laravel/vite-plugin.git'
   # Add more repositories here as needed
)
# Function to get directory name from repository URL
get_dir_name() {
  local repo_url="$1"
  echo "${repo_url##*/}" | sed 's/\.git$//'
}

# Function to clone or pull a repository
update_repo() {
  local repo_url="$1"
  local dir_name
  dir_name=$(get_dir_name "$repo_url")

  if [ -d "$dir_name" ]; then
    cd "$dir_name"
    git pull
    echo "Updated the repository: $dir_name"
  else
    git clone "$repo_url" "$dir_name"
    echo "Cloned the repository: $dir_name"
  fi
}

if [ ! -d "$DIR" ]; then
  mkdir "$DIR"
fi
cd "$DIR"
for item in "${projects[@]}"; do
    update_repo "$item"
done

```