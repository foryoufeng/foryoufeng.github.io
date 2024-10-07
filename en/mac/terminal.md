# terminal

install oh-my-zsh

```sh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

```

install  zsh-autosuggestions

```sh
git clone git@github.com:zsh-users/zsh-autosuggestions.git ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions

```

config oh-my-zsh,open `~/.zshrc`

```sh
vim ~/.zshrc

```

find `plugins` line and add plugin `zsh-autosuggestions`

```sh
plugins=(git zsh-autosuggestions)

```

save and make it efficient

```sh
source ~/.zshrc

```