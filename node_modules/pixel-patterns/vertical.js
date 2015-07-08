
var PixelPattern = require( './PixelPattern' );
var vertical = [ 2, 4, 6, 8, 10 ];

vertical = vertical.map( function( size ){

	return function( scale, opts){

		return PixelPattern( size,1,scale,function( x,y ){
			return x === 0;
		}, opts );

	};

});

module.exports = vertical;