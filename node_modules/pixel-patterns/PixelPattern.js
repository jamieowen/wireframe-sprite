
var createPattern = function( w, h, scale, setPixel, opts ){

	opts = opts || {};
	w = w || 2;
	h = h || 2;
	scale = scale || 1;

	var canvas;
	if( opts.createCanvas ){
		canvas = opts.createCanvas( w, h, scale );
	}else{
		canvas = document.createElement( 'canvas' );
		canvas.width = w;
		canvas.height = h;
	}

	if( !setPixel ){
		setPixel = function( x, y ){
			return (x % 2) === 0 && (y % 2) === 0;
		}
	}

	var iy,ix;

	var ctx = canvas.getContext('2d');
	var imgData = ctx.createImageData(1,1);
	var fill = false;
	var color;

	for( iy = 0; iy<h; iy++ ){
		for( ix = 0; ix<w; ix++ ){
			fill = setPixel( ix, iy );
			color = fill ? 255 : 0;

			for( var i = 0; i<imgData.data.length; i++ ){
				imgData.data[i] = color;
			}

			ctx.putImageData( imgData, ix, iy );
		}
	}

	return canvas;
};

module.exports = createPattern;