var express = require('express')
var cookieParser = require('cookie-parser')
var createError = require('http-errors')
var homeRouter = require('./routes/home')
var logger = require('morgan')
var path = require('path')
var sass = require('node-sass-middleware')

var app = express()

app.use( sass
({
	src: __dirname + '/sass',			// input .sass files
	dest: __dirname + '/public/styles',		// output CSS
	debug: true,
	sourceMap: true,
	outputStyle: 'compressed'
}))
							// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', homeRouter)
app.use('/big-frontier', homeRouter)
app.use('/cities', homeRouter)
app.use('/fun-with-light-and-heat', homeRouter)
app.use('/gmfj', homeRouter)
app.use('/images', homeRouter)
app.use('/last-summer', homeRouter)
app.use('/love-and-madness', homeRouter)
app.use('/music', homeRouter)
app.use('/point-me-into-the-sky', homeRouter)
app.use('/providence', homeRouter)
app.use('/songs-of-the-last-swan', homeRouter)

							// catch 404 and forward to error handler
app.use( (req, res, next) =>
{
	next( createError(404) )
})
							// error handler
app.use( (err, req, res, next) =>
{
							// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

							// render the error page
	res.status(err.status || 500)
	res.render('error')
})

module.exports = app
