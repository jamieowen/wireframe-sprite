
var PixelPattern = require( './PixelPattern' );
var horizontal = [ 2, 4, 6, 8, 10 ];

horizontal = horizontal.map( function( size ){

	return function( scale, opts){

		return PixelPattern( 1,size,scale,function( x,y ){
			return y === 0;
		}, opts );

	};

});

module.exports = horizontal;