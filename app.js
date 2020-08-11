const express = require('express')
const cookieParser = require('cookie-parser')
const createError = require('http-errors')
const logger = require('morgan')
const path = require('path')
const router = require('./routes')

const app = express()
							// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)
app.use('/big-frontier', router)
app.use('/cities', router)
app.use('/fun-with-light-and-heat', router)
app.use('/gmfj', router)
app.use('/images', router)
app.use('/last-summer', router)
app.use('/love-and-madness', router)
app.use('/music', router)
app.use('/point-me-into-the-sky', router)
app.use('/providence', router)
app.use('/songs-of-the-last-swan', router)

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
