
var diagonal = require( 'pixel-patterns/diagonal' );

var config = {
	cache: {},
	minMax: [ 50 * 50, 500 * 500 ],
	patternSteps: 5
};

var computePatternIndex = function( area ){
	var min = config.minMax[0];
	var max = config.minMax[1];

	var norm = Math.max( 0, Math.min( ( area - min ) / max , 1 ) );
	var idx =  Math.round( norm * (config.patternSteps-1 ) );

	return idx;
};

var results = [ 50*50, 2000*2000, 500*500, 200*200, 800*800, 10, 1000*1000, 1279 * 1023 ].map( function(value){
	computePatternIndex(value);
});

var create = function( w, h, opts ){

    w = Math.round( w );
    h = Math.round( h );

    var id = w + 'x' + h;
    var exists = config.cache[id];

    if( exists ){
        return exists;
    }else{

		opts = opts || {};

        var canvas = document.createElement( 'canvas' );
        canvas.width  = w;
        canvas.height = h;
        config.cache[ id ] = canvas;

		var ctx = canvas.getContext('2d');

		var patternIndex = computePatternIndex( w * h );
		var pattern = ctx.createPattern( diagonal[patternIndex](),'repeat' );
		ctx.rect(0,0,w,h);
		ctx.fillStyle = pattern;
		ctx.fill();

		ctx.lineWidth=10;
		ctx.strokeStyle='#fff';

		ctx.stroke();

        return canvas;
    }

};

create.minMax = function( minArea, maxArea ) {

	config.minMax[0] = minArea;
	config.minMax[1] = maxArea;

};


create.deleteAll = function(){

};


module.exports = create;
