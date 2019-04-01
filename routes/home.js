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

module.exports = router;
