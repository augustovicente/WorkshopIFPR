cd /etc/nginx/sites-available/
nano workshop.conf
# arquivo frontend
ln /etc/nginx/sites-available/workshop.conf /etc/nginx/sites-enabled/
nginx -t
nano api-workshop.conf
# arquivo backend
ln /etc/nginx/sites-available/api-workshop.conf /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
# acessando o site
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d workshop.invenire42.online -d api.workshop.invenire42.online