# andreduvoisin-web

Personal website for Andre Duvoisin.

[andreduvoisin.com](https://andreduvoisin.com)

## Setup

### Local Development

- Install Docker. [How?](https://docs.docker.com/install/)

- Install Docker Compose. [How?](https://docs.docker.com/compose/install/)

### AWS

- SSH into instance. [How?](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html)

- Run the following commands:

```bash
sudo yum update -y
sudo yum install git -y
git clone https://aduvoisin13@bitbucket.org/aduvoisin13/andreduvoisin-web.git
cd andreduvoisin-web
bash ./scripts/setup-aws-instance.sh
```

- Log out and back in again to pick up the new ec2-user group permissions. Note: In some cases, you may need to reboot your instance to provide permissions for the ec2-user to access the Docker daemon.

## Run

### Development

To start all Docker containers:

```bash
# --build : Build images before starting containers. (You almost definitely want this.)
docker-compose up -d [--build]
```

To stop all Docker containers:

```bash
# --volumes : Remove named volumes declared in the `volumes` section of the Compose
#             file and anonymous volumes attached to containers.
#             (You probably want this in development.)
docker-compose down [--volumes]
```

### Production

To start all Docker containers:

```bash
# --build : Build images before starting containers. (You almost definitely want this.)
# --no-deps : Prevents Compose from also recreating any services which `SERVICE` depends on.
docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d [--build] [--no-deps SERVICE]
```

To stop all Docker containers:

```bash
# --volumes : Remove named volumes declared in the `volumes` section of the Compose
#             file and anonymous volumes attached to containers.
#             (Do not use in production unless you understand what you are doing.)
docker-compose -f docker-compose.yml -f docker-compose.production.yml down [--volumes]
```
