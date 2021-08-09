import canvasToImage from "canvas-to-image";
var SimplexNoise = require('simplex-noise');
  var canvas;
  var ctx;
  var image;
  var data;

  function init(){
    canvas = document.getElementById('image');
    ctx = canvas.getContext('2d');
    return canvas;
  }

  function saveImage(scale){
    var resizedCanvas =  resizeAndExportCanvas(scale);
    canvasToImage(resizedCanvas, {
      name: `generatedCanvas${(new Date().toJSON().slice(0,10))}`,
      type: 'png',
      quality: 1
    });
  }

  function resizeAndExportCanvas(scale){
    var c = document.createElement('canvas');
    c.width = canvas.width*scale;
    c.height = canvas.height*scale;
    // resize the new canvas
    const cctx = c.getContext('2d');
    cctx.webkitImageSmoothingEnabled = false;
    cctx.mozImageSmoothingEnabled = false;
    cctx.imageSmoothingEnabled = false;
    cctx.drawImage(canvas, 0,0,canvas.width, canvas.height, 0,0,c.width, c.height);
    return c;
  }

	async function renderCanvas(settings){

    const noise = updateNoise(settings);
    //setting dimensions
    const canvasWidth = settings.pixelsWidth;
    const canvasHeight = settings.pixelsHeight;

    ctx.canvas.width  = canvasWidth;
    ctx.canvas.height = canvasHeight;

    //create image
    image = ctx.createImageData(canvasWidth, canvasHeight);
    data = image.data;
    
    //get respective color per pixel
    let colorArr;
    if (settings.grayScale) {
      colorArr = getTintArray(settings.tint, noise);
    } else {
      colorArr = getColorArray(settings.colors, noise);
    }

    //setting each pixel
    let noiseIndex = 0;
    for (var i = 0; i < canvasWidth*canvasHeight*4; i+=4) {
      //offset = (y * id.width + x) * 4;
        drawPixel(i, colorArr[noiseIndex]);
      noiseIndex++;
    }

    swapBuffer(); 
  }

  function swapBuffer() {
    ctx.putImageData(image, 0, 0);
  }

  //color process
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
    const colorsRGB = colors.map( color=>{
      return {
        value:hexToRgb(color.value),
        breakpoint:color.breakpoint
      }
    });
    let colorArr = arr.map( noise =>{
      let currentColor = {r:255, g:255, b:255, a:255};
      colorsRGB.forEach(color => {
        if (noise>=color.breakpoint) {
          currentColor= color.value;
        }       
      });
      return currentColor;
    });
    return colorArr;
  }

  function getTintArray(tint, arr){
    const tintRGB = hexToRgb(tint); 
    let colorArr = new Array (arr.length);
    for (let index = 0; index < colorArr.length; index++) {
      colorArr[index] = {
        r: parseInt(arr[index]*tintRGB.r, 10),
        g: parseInt(arr[index]*tintRGB.g, 10),
        b: parseInt(arr[index]*tintRGB.b, 10),
        a: 255
      }
    }
    return colorArr;
  }

  function drawPixel(index, color){
    data[index + 0] = color.r;
    data[index + 1] = color.g;
    data[index + 2] = color.b;
    data[index + 3] = color.a;
  }

  //noise process
  const updateNoise = (settings) => {
    const simplex = new SimplexNoise(settings.seed);
    let noiseArr=[];
    let noiseIndex = 0;
    for (let i = 0; i < settings.pixelsHeight; i++) {
      for (let j = 0; j < settings.pixelsWidth; j++) {
        noiseArr[noiseIndex] = evaluateCoords(j,i,settings, simplex);
        noiseIndex++;
      } 
    }
    return noiseArr;
  }

  const evaluateCoords= (x,y, settings, simplex)=>{
      let amp = 1
      let freq = 1;
      let noise = 0
      const midWidthX = (settings.pixelsWidth)/2;
      const midWidthY = (settings.pixelsHeight)/2;
      /*let octaveOffsets = [];
      for (let i = 0; i < settings.octaves; i++) {
        const offsetX =  + settings.xOffset;
        const offsetY =  - settings.yOffset;
        octaveOffsets[i] = [offsetX, offsetY];
        //maxPossibleHeight += amplitude;
        //amplitude *= persistance;
      }*/

      //add successively smaller, higher-frequency terms
      for(let i = 0; i < settings.octaves; ++i){
          let calcX =((x-midWidthX)/settings.zoom+settings.xOffset/midWidthX)*freq;
          let calcY =((y-midWidthY)/settings.zoom+settings.yOffset/midWidthY)*freq;

          noise += simplex.noise2D(calcX,calcY) * amp//*falloff*settings.falloff
          //maxAmp += amp
          amp *= settings.persistence
          freq *= settings.lacunarity;
      }
          let fx=(x-midWidthX)/settings.zoom;
          let fy=(y-midWidthY)/settings.zoom;
          const rSquare = fx*fx+fy*fy;
          let falloff = 0; 
          if(rSquare*rSquare*settings.falloff<=1) falloff = Math.pow(1-settings.falloff*rSquare*rSquare,2); 

      //take the average value of the iterations
      //noise /= maxAmp
      //normalize the result
      noise = (noise + 1)*0.5*falloff
      return Math.max(0, noise-settings.minValue);
  }

  const Render = {renderCanvas, saveImage, init}
    export default Render;