exports.renderCanvas = renderCanvas;
  var canvas;
  var ctx;
  var image;
  var data;

  function initVars(){
    if (canvas == null) {
      canvas = document.getElementById('image');
      ctx = canvas.getContext('2d');
    }
  }

  function swapBuffer() {
    ctx.putImageData(image, 0, 0);
  }

  function getColorArray(colors, arr){
    /*console.log(colors[0].breakpoint);
    console.log(arr[0]);*/
    let colorArr = new Array (arr.length);
    for (let index = 0; index < colorArr.length; index++) {
      colorArr[index] = {r:183, g:108, b:213, a:255}; 
    }
    return colorArr;
  }

  function drawPixel(index, color){
    data[index + 0] = color.r;
    data[index + 1] = color.g;
    data[index + 2] = color.b;
    data[index + 3] = color.a;
  }

	function renderCanvas(settings, noise){
    //setting dimensions
    const canvasWidth = settings.pixelsWidth;
    const canvasHeight = settings.pixelsHeight;

    //init vars if required
    initVars(canvasWidth, canvasHeight);
    ctx.canvas.width  = canvasWidth;
    ctx.canvas.height = canvasHeight;

    //create image
    image = ctx.createImageData(canvasWidth, canvasHeight);
    data = image.data;
    
    //get respective color per pixel
    const colorArr = getColorArray(settings.colors, noise);

    //setting each pixel
    let noiseIndex = 0;
    for (var i = 0; i < canvasWidth*canvasHeight*4; i+=4) {
      //offset = (y * id.width + x) * 4;
      if (settings.grayScale) {
        let color;
        color = {r:Math.floor(noise[noiseIndex] * 256), 
                  g:Math.floor(noise[noiseIndex] * 256),
                  b:Math.floor(noise[noiseIndex] * 256),
                  a:255};
        drawPixel(i,color);
      }else{
        drawPixel(i, colorArr[noiseIndex]);
      }
      noiseIndex++;
    }

    swapBuffer(); 
    //ctx.putImageData(id, 0, 0);
  }

