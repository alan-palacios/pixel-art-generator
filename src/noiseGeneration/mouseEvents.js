var canvas;
var inputUpdateCanvas;
var getState;
var zoom=1;
var isDown = false;
var initMousePosition;
var offsetsUpdateCanvas;
var currentX;
var currentY;

function init(c, getStateN, inputUpdateCanvasN, offsetsUpdateCanvasN){
  canvas = c;
  inputUpdateCanvas=inputUpdateCanvasN;
  getState = getStateN;
  offsetsUpdateCanvas = offsetsUpdateCanvasN;

  zoom = Math.sqrt(getState().zoom);

  canvas.addEventListener('wheel',e=> onZoom(e), false);
  canvas.addEventListener('mousedown', e => onMouseDown(e), true);

  document.addEventListener('mouseup', () => onMouseUp(), true);

  document.addEventListener('mousemove', e => onMouseMove(e), true);
}

function onMouseUp() {
  document.body.style.cursor = 'default';
  isDown = false
}

function onMouseDown(e) {
  currentX = getState().xOffset;
  currentY = getState().yOffset;
  document.body.style.cursor = 'move';
  isDown = true;
  initMousePosition = {
    x : e.clientX,
    y : e.clientY
  }
}
function onMouseMove(e) {
  if (isDown) {
    const xDif = initMousePosition.x - e.clientX;
    const yDif = initMousePosition.y - e.clientY;
    offsetsUpdateCanvas(currentX + xDif, currentY+yDif); 
  }
}

function onZoom(e) {
  e.preventDefault();
  if(e.deltaY > 0){    
    if(zoom>1)zoom-=1;
  }else{
    zoom+=1;
  }
  inputUpdateCanvas({target:{name:"zoom", value:Math.pow(zoom,2)}}); 
}
    
const MouseEvents = {init}
export default MouseEvents;