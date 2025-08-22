#!/bin/bash
set -e

if [ $# -lt 1 ]; then
    echo "Usage: $0 <git_repo_url>"
    exit 1
fi

REPO_URL=$1

# 仓库名
REPO_NAME=$(basename "$REPO_URL" .git)

# 组织名
TMP=${REPO_URL#*:}
ORG_NAME=${TMP%%/*}

# 远程服务器信息
REMOTE_USER="www"
REMOTE_HOST="154.201.77.212"
REMOTE_BASE_DIR="/home/www/github/$ORG_NAME"

# 远程操作：创建目录、clone 或打包
ssh "$REMOTE_USER@$REMOTE_HOST" "
mkdir -p $REMOTE_BASE_DIR
cd $REMOTE_BASE_DIR
if [ ! -d $REPO_NAME ]; then
    echo \"Cloning $REPO_NAME...\"
    git clone $REPO_URL
fi
echo \"Creating $REPO_NAME.tar.gz...\"
tar -czf $REPO_NAME.tar.gz $REPO_NAME
"

# 下载 tar.gz 并解压到本地组织目录
scp "$REMOTE_USER@$REMOTE_HOST:$REMOTE_BASE_DIR/$REPO_NAME.tar.gz" "./"
tar -xzf "$REPO_NAME.tar.gz"
rm -rf "$REPO_NAME.tar.gz"

echo "Repository $REPO_NAME downloaded successfully"
