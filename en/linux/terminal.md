# install zsh

install oh-my-zsh
```sh
sudo apt install zsh -y
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

install zsh-autosuggestions
```sh

```

config 
```sh
vi ~/.zshrc
## add plugins
plugins=(git zsh-autosuggestions)

```

source file
```sh
source ~/.zshrc

```