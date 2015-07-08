
var PixelPattern = require( './PixelPattern' );
var diagonal = [ 3, 6, 9, 12, 15 ];

diagonal = diagonal.map( function( size ){

	return function( scale, opts){

		return PixelPattern( size,size,scale,function( x,y ){
			return x === y;
		}, opts );

	};

});

module.exports = diagonal;