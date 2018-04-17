# andreduvoisin-web

Personal website for Andre Duvoisin.

[andreduvoisin.com](https://andreduvoisin.com)

## Setup

### AWS

1. SSH into instance. [How?](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html)

2. Run the following commands:

```bash
sudo yum update -y
sudo yum install git -y
git clone https://aduvoisin13@bitbucket.org/aduvoisin13/andreduvoisin-web.git
cd andreduvoisin-web
bash ./scripts/setup-aws-instance.sh
```

3. Log out and back in again to pick up the new ec2-user group permissions. Note: In some cases, you may need to reboot your instance to provide permissions for the ec2-user to access the Docker daemon.

## Run

Start all Docker containers:

```bash
# --build : Build images before starting containers. (You almost definitely want this.)
docker-compose up -d [--build]
```

Stop all Docker containers:

```bash
# --volumes : Remove named volumes declared in the `volumes` section of the Compose
#             file and anonymous volumes attached to containers.
#             (You probably want this in development. Do not use in production unless you
#             understand what you are doing.)
docker-compose down [--volumes]
```
