# install

* install nvm
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```
if github request error, change https to ssh

```sh
NVM_SOURCE_URL="git@github.com:nvm-sh/nvm.git"
```
![install.png](images/install.png)

# add shell

```
vi ~/.bash_profile

# the shell add proxy
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
export NVM_IOJS_ORG_MIRROR=https://npmmirror.com/mirrors/iojs
export NVM_DIR="$HOME/.config/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# end

# make it change
source ~/.bashrc
```

# install node
```
nvm list-remote
nvm install 22
nvm use 22
node -v
```

# npm config
```
npm config set registry https://registry.npmmirror.com
// 设置npm默认源
npm config set registry https://registry.npmjs.org/
```

install

```sh
npm install --verbos
```

set electron mirror
```sh
npm config set electron_mirror=https://registry.npmmirror.com/-/binary/electron/
```

set electron_builder_binaries_mirror in `~/.bashrc`
```sh
export ELECTRON_BUILDER_BINARIES_MIRROR=https://npmmirror.com/mirrors/electron-builder-binaries/
```

source code install

```sh
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```