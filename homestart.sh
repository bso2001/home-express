#!/bin/sh

if [ -z "$HOMEDIR" ]
then
	HOMEDIR=/var/www/bertolsson.com
fi

cd $HOMEDIR

DEBUG=home:*
export DEBUG

nohup node www.js $* > .run.log 2>&1 &

echo $! > .run.pid
