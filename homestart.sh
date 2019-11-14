#!/bin/sh

if [ -z "$HOMEDIR" ]
then
	HOMEDIR=/var/www/html/home-prod
fi

cd $HOMEDIR

DEBUG=home:*
export DEBUG

nohup node www.js $* > .home.log 2>&1 &

echo $! > .home.pid
