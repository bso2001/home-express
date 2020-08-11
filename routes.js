var app = require( './app' )
var express = require( 'express' )
var router = express.Router()

router.get( '/', ( req, res, next ) => { res.render( 'home' )})

router.get('/big-frontier', function(req, res, next) { res.render( 'frontier' )})

router.get('/cities', function(req, res, next) { res.render( 'cities' )})

router.get('/fun-with-light-and-heat', function(req, res, next) { res.render( 'fwlah' )})

router.get('/gmfj', function(req, res, next) { res.render( 'gmfj' )})

router.get('/images', function(req, res, next) { res.render( 'images' )})

router.get('/last-summer', function(req, res, next) { res.render( 'bnml' )})

router.get('/love-and-madness', function(req, res, next) { res.render( 'madness' )})

router.get( '/music', ( req, res, next ) => { res.render( 'music' )})

router.get('/point-me-into-the-sky', function(req, res, next) { res.render( 'pmits' )})

router.get('/providence', function(req, res, next) { res.render( 'providence' )})

router.get('/songs-of-the-last-swan', function(req, res, next) { res.render( 'swan' )})

module.exports = router
