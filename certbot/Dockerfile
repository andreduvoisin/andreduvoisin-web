FROM certbot/dns-route53

RUN apk update
RUN apk add docker

RUN echo "0 9 * * * certbot renew --pre-hook \"docker stop andreduvoisin-web_nginx\" --post-hook \"docker start andreduvoisin-web_nginx\"" | crontab -
