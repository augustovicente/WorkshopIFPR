sudo apt install nodejs
sudo apt install npm
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