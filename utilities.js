(function( global ) {

	var is = function ( value, type ) {
		return type ===
			// If the value is null or undefined compare directly to it:
			value == null ? '' + value :
			// Otherwise get the [[Class]] and compare to the relevant part of the value:
				({ }).toString.call( value ).slice( 8, -1 ).toLowerCase();
	};
	
	// Thanks to @nathansmith for this one: https://gist.github.com/1027395
	var parseInt = window.parseInt;
	
	if ( parseInt( '09' ) === 0 ) {
		window.parseInt = function ( str, radix ) {
			return parseInt( str, radix || 10 );
		};
	}

})( this );