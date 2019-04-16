$( document ).ready( function()
{
	$( "div[class*=' popmake-']" ).click( function ()
	{
		let cname = $(this).attr( 'class' );
		let pname = cname.substring( cname.indexOf( 'popmake-' ) + 8 );

		let modal = new tingle.modal(
		{
			closeMethods: ['overlay', 'escape'],
			closeLabel: "Close"
		});

		modal.setContent( "<div class='bso-header-2'> One More Fool </div> <div class='bso-medium-text' style='padding-top: 10px;'> <p> here's one more fool for the road<br/> there's one more story untold<br/> all that glittering gold brings<br/> cold steel straight on through your heart<br/> </p> <p> somebody's taking your place<br/> before you can finish the race<br/> a voice in your head says<br/> too late to illuminate<br/> the trail of broken hearts<br/> </p> <p> one night you're feeling so much older<br/> one dream she's whispering at your shoulder<br/> then you find you're just a pawn in her game<br/> and the winner is always the same<br/> </p> <p> she's dressing to kill tonight<br/> spinning her web with delight<br/> she's running every table in sight<br/> night life is the game<br/> she's out there on the prowl<br/> </p> <p> one night you're feeling so much older<br/> one dream she's whispering at your shoulder<br/> and then you find you're just a pawn in her game<br/> and the winner is always the same<br/> </p> </div>");

		modal.open();
		modal.close();
	});
});
