#!/bin/sh

# awsのec2インスタンスの環境設定用ファイルです。

sudo yum -y update

# nodeのinstallを行います。

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16

# dockerのinstallを行います。

sudo yum install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user
# sudo docker info
sudo docker -v

# docker composeのinstallを行います。

sudo curl -L "https://github.com/docker/compose/releases/download/v2.15.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
wait
sudo chmod +x /usr/local/bin/docker-compose

# gitの設定を行います。
sudo yum install -y git
ssh-keygen -t rsa -b 4096
echo "秘密鍵の情報を表示します"
cat ~/.ssh/id_rsa.pub
