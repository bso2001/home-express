#!/bin/sh

cd /var/www/html/home
DEBUG=home:*
export DEBUG

nohup node www.js $* > .home.log 2>&1 &

echo $! > .home.pid
