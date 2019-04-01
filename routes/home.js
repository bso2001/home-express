var express = require( 'express' );
var router = express.Router();
							/* GET home page. */
router.get('/', function(req, res, next)
{
	res.render( 'home', { title: 'Express' } );
});
							/* GET imagery page. */
router.get('/imagery', function(req, res, next)
{
	res.render( 'imagery', { title: 'Imagery' } );
});

module.exports = router;
