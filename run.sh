cd /var/www/html/home
DEBUG=home:*
export DEBUG

nohup npm start > home.log 2>&1 &

echo $$ > .home.pid
