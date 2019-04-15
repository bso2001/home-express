var express = require( 'express' );
var router = express.Router();

router.get('/', function(req, res, next) { res.render( 'home', { title: 'Express' } ); });

router.get('/big-frontier', function(req, res, next) { res.render( 'frontier', { title: 'Big Frontier' } ); });

router.get('/cities', function(req, res, next) { res.render( 'cities', { title: 'Cities' } ); });

router.get('/fun-with-light-and-heat', function(req, res, next) { res.render( 'fwlah', { title: 'Fun With Light and Heat' } ); });

router.get('/gmfj', function(req, res, next) { res.render( 'gmfj', { title: 'GMFJ' } ); });

router.get('/images', function(req, res, next) { res.render( 'images', { title: 'Images' } ); });

router.get('/last-summer', function(req, res, next) { res.render( 'bnml', { title: 'Last Summer' } ); });

router.get('/love-and-madness', function(req, res, next) { res.render( 'madness', { title: 'Love and Madness' } ); });

router.get('/music', function(req, res, next) { res.render( 'music', { title: 'Music' } ); });

router.get('/point-me-into-the-sky', function(req, res, next) { res.render( 'pmits', { title: 'Point Me Into the Sky' } ); });

router.get('/providence', function(req, res, next) { res.render( 'providence', { title: 'Providence' } ); });

router.get('/songs-of-the-last-swan', function(req, res, next) { res.render( 'swan', { title: 'Songs of the Last Swan' } ); });

module.exports = router;
