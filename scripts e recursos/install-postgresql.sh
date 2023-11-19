sudo apt update
sudo apt install postgresql postgresql-contrib
nano /etc/postgresql/*/main/postgresql.conf
## listen_addresses = '*'
## host  all  all 0.0.0.0/0 scram-sha-256
sudo systemctl start postgresql.service

sudo -u postgres createuser --interactive
sudo -u postgres createdb systemuser
sudo adduser systemuser
sudo -i -u systemuser
psql

CREATE DATABASE workshop;