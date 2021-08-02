import Perlin from "./perlin-noise";
import canvasToImage from "canvas-to-image";
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

  function saveImage(){
    canvasToImage(canvas, {
      name: 'generatedCanvas',
      type: 'png',
      quality: 1
    });
  }

  function swapBuffer() {
    ctx.putImageData(image, 0, 0);
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: 255
    } : null;
  }

  function getColorArray(colors, arr){
    /*console.log(colors[0].breakpoint);
    console.log(arr[0]);*/
    let colorArr = new Array (arr.length);
    for (let index = 0; index < colorArr.length; index++) {
      let currentColor = "#ffffff"; //{r:255, g:255, b:255, a:0};
      colors.forEach(color => {
        if (arr[index]>color.breakpoint) {
          currentColor= color.value;
        }       
      });
      colorArr[index] = hexToRgb(currentColor); 
    }
    return colorArr;
  }

  function drawPixel(index, color){
    data[index + 0] = color.r;
    data[index + 1] = color.g;
    data[index + 2] = color.b;
    data[index + 3] = color.a;
  }

	function renderCanvas(settings){
    const noise = updateNoise(settings);
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


  const updateNoise = (settings) => {
    Perlin.setSeed(settings.seed);
    let noiseGen = Perlin.generatePerlinNoise(settings.pixelsWidth, settings.pixelsHeight, {
      amplitude: settings.amplitude,
      octaveCount: settings.octaves,
      persistence: settings.persistence,
    });
    return noiseGen;
  }
  const Render = {renderCanvas, saveImage}
  export default Render;