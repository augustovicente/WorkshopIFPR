npx prisma migrate dev --name 'name added'
npx prisma generate
ts-node prisma/seeder.ts
# Backend
cd /home/api
rm -r ./*
yarn build # local
zip -r ../dist.zip * # local
scp dist.zip root@<ip>:/home/api # local
unzip dist.zip
rm dist.zip
npm i --only=prod
pm2 restart api
# Frontend
cd /var/www/html/frontend/
rm -r ./*
yarn build # local
zip -r ../build.zip * # local
scp build.zip root@<ip>:/var/www/html/frontend # local
unzip build.zip
rm build.zip