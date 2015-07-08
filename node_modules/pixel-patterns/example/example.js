
var PixelPattern = require( '../PixelPattern' );
var diagonal = require( '../diagonal' );
var horizontal = require( '../horizontal' );
var vertical = require( '../vertical' );

window.onload = function(){

	document.body.style.backgroundColor = '#121212';

	var patterns = diagonal.concat( horizontal ).concat( vertical );
	var canvas,pattern,ctx;
	var size = 150;

	for( var i = 0; i<patterns.length; i++ ){
		canvas = document.createElement( 'canvas' );
		canvas.style.margin = '4px';

		canvas.width = canvas.height = size;
		ctx = canvas.getContext('2d');

		pattern = ctx.createPattern( patterns[i](),"repeat" );
		ctx.rect(0,0,size,size);
		ctx.fillStyle=pattern;
		ctx.fill();

		document.body.appendChild( canvas );
	}
};
