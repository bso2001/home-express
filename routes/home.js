var express = require( 'express' );
var router = express.Router();
							/* GET home page. */
router.get('/', function(req, res, next)
{
	res.render( 'home', { title: 'Express' } );
});
							/* GET images page. */
router.get('/images', function(req, res, next)
{
	res.render( 'images', { title: 'Images' } );
});
							/* GET music page. */
router.get('/music', function(req, res, next)
{
	res.render( 'music', { title: 'Music' } );
});
							/* GET point-me-into-the-sky. */
router.get('/point-me-into-the-sky', function(req, res, next)
{
	res.render( 'pmits', { title: 'Point Me Into the Sky' } );
});

module.exports = router;
