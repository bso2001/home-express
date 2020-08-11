#!/usr/bin/env node

	// This is "entry point," the file that is passed to Node to present this web site.
	// The site is an Express application, which is set up in app.js

const app = require('./app')
const http = require('http')
const debug = require('debug')('home:server')

	// Fetch port from environment and store in Express.

const port = normalizePort( process.env.HOMEPORT || '8017' )
app.set( 'port', port )

	// Create HTTP server

const server = http.createServer( app )

	// Listen on provided port, on all network interfaces.

server.listen( port )
server.on( 'error', onError )
server.on( 'listening', onListening )

	// Normalize a port into a number, string, or false.

function normalizePort(val)
{
	const port = parseInt(val, 10)

	if ( isNaN(port) )
		return val

	if ( port >= 0 )
		return port

	return false
}

	// Listener for HTTP server "error" event.

function onError(error)
{
	if (error.syscall !== 'listen')
		throw error

	let bind = ( typeof port === 'string' ) ? ( 'Pipe ' + port ) : ( 'Port ' + port )

					// Handle specific listen errors with friendly messages.
	switch (error.code)
	{
		case 'EACCES':
			console.error(bind + ' requires elevated privileges')
			process.exit(1)
			break
		case 'EADDRINUSE':
			console.error(bind + ' is already in use')
			process.exit(1)
			break
		default:
			throw error
	}
}

	// Listener for HTTP server "listening" event.

function onListening()
{
	let addr = server.address()
	let bind = ( typeof addr === 'string' ) ? ( 'pipe ' + addr ) : ( 'port ' + addr.port )

	debug( 'Listening on ' + bind )
}
