module.exports={
	renderCanvas(settings, noise){
    const canvas = document.getElementById('image');
    const ctx = canvas.getContext('2d');
    //setting dimensions
    const canvasWidth = settings.pixelsWidth;
    const canvasHeight = settings.pixelsHeight;
    ctx.canvas.width  = canvasWidth;
    ctx.canvas.height = canvasHeight;

    //clear image
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    var id = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    var pixels = id.data;
 
    let noiseIndex = 0;
    //setting each pixel
    for (var i = 0; i < canvasWidth*canvasHeight*4; i+=4) {
      //var x = Math.floor(Math.random() * canvasWidth);
      //var y = Math.floor(Math.random() * canvasHeight);
      var r = Math.floor(noise[noiseIndex] * 256);
      var g = Math.floor(noise[noiseIndex] * 256);
      var b = Math.floor(noise[noiseIndex] * 256);
      var off = i;//(y * id.width + x) * 4;
      pixels[off] = r;
      pixels[off + 1] = g;
      pixels[off + 2] = b;
      pixels[off + 3] = 255;
      noiseIndex++;
    }

    
    ctx.putImageData(id, 0, 0);
  }
}