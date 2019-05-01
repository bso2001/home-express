pidfile=.home.pid

if [ -f $pidfile ]
then
	kill -9 `cat $pidfile` > /dev/null 2>&1
fi

rm -f $pidfile
