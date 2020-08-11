$( document ).ready( () =>
{
										// modal popup handler
	$( "span[class*=' popmake-']" ).click( () =>
	{
		let x = $(this).attr( 'class' )
		let y = x.substring( x.indexOf( 'popmake-' ) + 8 )
		let z = y.substring( 0, y.indexOf( '-' ) )
		let u = '/lyrics/' + z + '.html'

		let modal = new tingle.modal(
		{
			closeMethods: ['overlay', 'escape'],
			closeLabel: "Close"
		})

		$.ajax(
		{
			url : u, success : function( data ) { modal.setContent( data ); }
		})

		modal.open()
		modal.close()
	})
										// handle menu hover
	$( '#trigger' ).click( function() { $(this).trigger('click') } )

										// click handlers for home page boxes
	$( '.card#go-to-music' ).click( () => { top.location = '/music' })
	$( '.card#go-to-images' ).click( () => { top.location = '/images' })
	$( '.card#go-to-tech' ).click( function() { window.open( 'https://olsson.tech', '_new' ) })
})
