#!/bin/sh

if [ -z "$HOMEDIR" ]
then
	HOMEDIR=/var/www/html/home-prod
fi

cd $HOMEDIR

pidfile=.run.pid

if [ -f $pidfile ]
then
	kill -9 `cat $pidfile` > /dev/null 2>&1
fi

rm -f $pidfile
