const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['./3.png'], './', {
  use: [imageminPngquant({
    quality: 30,
  })]
}).then(() => {
	console.log('Images optimized');
});
