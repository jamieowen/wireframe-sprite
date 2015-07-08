

var Wireframe = require( '../Wireframe' );

window.onload = function(){

	var sizes = [
		[50,50],
		[300,125],
		[800,600],
		[44,44],
		[250,300]
	];

	document.body.style.backgroundColor = '#333';

	var canvas;

	for( var i = 0; i<sizes.length; i++ ){
		canvas = Wireframe( sizes[i][0], sizes[i][1] );
		canvas.style.margin = '2px';
		document.body.appendChild( canvas );
	}

};