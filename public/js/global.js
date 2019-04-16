$( document ).ready( function()
{
	$( "div[class*=' popmake-']" ).click( function ()
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
});
