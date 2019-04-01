cd /var/www/html/new-home
DEBUG=home:*
export DEBUG

nohup npm start > home.log 2>&1 &

echo $$ > .home.pid
