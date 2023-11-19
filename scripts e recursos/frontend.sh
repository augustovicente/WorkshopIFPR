sudo apt install nginx
sudo systemctl start nginx
# criando o diretorio do front
cd /var/www/html/
mkdir frontend
cd frontend/

yarn build # local
zip -r ../build.zip * # local
scp build.zip root@<ip>:/var/www/html/frontend # local
unzip build.zip
rm build.zip
