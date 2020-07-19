$( document ).ready( function()
{
	$( "span[class*=' popmake-']" ).click( function()			// modal popup handler
	{
		let x = $(this).attr( 'class' );
		let y = x.substring( x.indexOf( 'popmake-' ) + 8 );
		let z = y.substring( 0, y.indexOf( '-' ) );
		let u = '/lyrics/' + z + '.html';

		let modal = new tingle.modal(
		{
			closeMethods: ['overlay', 'escape'],
			closeLabel: "Close"
		});

		$.ajax(
		{
			url : u, success : function( data ) { modal.setContent( data ); }
		});

		modal.open();
		modal.close();
	});

	$( '.card#go-to-music' ).click( function()				// click handlers for home page boxes
	{
		top.location = '/music';
	});

	$( '.card#go-to-images' ).click( function()
	{
		top.location = '/images';
	});

	$( '.card#go-to-tech' ).click( function()
	{
		window.open( 'http://olsson.tech', '_new' );
	});
});
