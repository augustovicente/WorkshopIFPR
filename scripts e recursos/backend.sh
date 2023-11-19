sudo apt install nodejs
sudo apt install npm
sudo /bin/dd if=/dev/zero of=/var/swap.1 bs=1M count=1024
sudo /sbin/mkswap /var/swap.1
sudo /sbin/swapon /var/swap.1
npm install pm2 -g
# deploy
cd /home
mkdir api
cd api
yarn build # local
# comprimindo e enviando
zip -r ../dist.zip * # local
scp dist.zip root@<ip>:/home/api # local
sudo apt install unzip
unzip dist.zip
rm dist.zip
# startando
npm i --only=prod
nano .env
pm2 start api/server.js --name api