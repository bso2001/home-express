#!/bin/sh

if [ -z "$HOMEDIR" ]
then
	HOMEDIR=/var/www/html/home-dev
fi

cd $HOMEDIR

export DEBUG=home:*
export HOMEPORT=8027

nohup node www.js $* > .home.log 2>&1 &

echo $! > .home.pid
