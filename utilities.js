(function( ns ) {
	
	ns && ns.utilities = {
		
		// Compare a value's internal [[Class]] property to a normalized type and check for equality.
		// Makes type-checking across many value types much simpler.
		// Example: is( [ ], 'array' ) | is( /value/, 'regexp' ) | is ( undefined, 'undefined' )
		is: function ( value, type ) {
			return type ===
				// If the value is null or undefined compare directly to it:
				value == null ? '' + value :
					// Otherwise get the [[Class]] and compare to the relevant part of the value:
					({ }).toString.call( value ).slice( 8, -1 ).toLowerCase();
		}

	};

})();