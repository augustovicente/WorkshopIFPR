nano /etc/nginx/sites-available/default
limit_req_zone $binary_remote_addr zone=limitreqsbyaddr:20m rate=10r/s;
limit_req_status 429;

nano /etc/nginx/sites-available/workshop.conf
limit_req zone=limitreqsbyaddr;
nano /etc/nginx/sites-available/api-workshop.conf
limit_req zone=limitreqsbyaddr;

nginx -t
sudo systemctl reload nginx

ab -n 100 -c 10 https://workshop.invenire42.online
