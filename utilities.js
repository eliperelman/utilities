(function ( window ) {

	var is = function ( value, type ) {
		return type ===
			// If the value is null or undefined compare directly to it:
			value == null ?
				'' + value :
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

    // async functional helper
    // returns back a new version of a function
    // that forces execution async (i.e. executes
    // the function after the current call stack
    // on its own stack)
    var async = function ( fn ) {
        return function () {
            var args = [].slice.call( arguments );
            var context = this;

            setTimeout( function () {
                fn.apply( context, args );
            }, 0 );
        };
    };

})( window );