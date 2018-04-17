#!/bin/bash

# install docker
# https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html
sudo yum install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user

# install docker-compose
# https://docs.docker.com/compose/install/
sudo curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

echo ""
echo "Log out and log back in again to pick up the new ec2-user group permissions. Note: In some cases, you may need to reboot your instance to provide permissions for the ec2-user to access the Docker daemon."
