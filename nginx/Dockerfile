FROM nginx:1.13

RUN apt-get update
RUN apt-get install software-properties-common -y
RUN apt-get install gpg -y
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv 8C47BE8E75BCA694
RUN add-apt-repository ppa:certbot/certbot -y
RUN add-apt-repository 'deb http://deb.debian.org/debian testing main' -y
RUN apt-get update
RUN apt-get install python3.6 -t testing -y
RUN apt-get install python-certbot-nginx -y
RUN apt-get autoremove -y

# RUN certbot --nginx --server https://acme-v02.api.letsencrypt.org/directory -d andreduvoisin.com -d *.andreduvoisin.com

# RUN echo "0 12 * * * /usr/bin/certbot renew --quiet" | crontab -
