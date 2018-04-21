#!/bin/bash

echo "0 9 * * * docker-compose -f ~/andreduvoisin-web/docker-compose.yml -f docker-compose.production.yml run certbot" | crontab -
