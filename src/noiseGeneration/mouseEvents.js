var canvas;
var changeZoom;

function init(c, changeZoomFunc){
  canvas = c;
  changeZoom=changeZoomFunc;
  canvas.addEventListener('wheel',e=> onZoom(e), false);
}

function onZoom(e) {
  e.preventDefault();
  let dir = 1;
  if(e.deltaY > 0){    
    dir=-1;
  }
  changeZoom(dir);
}

const MouseEvents = {init}
export default MouseEvents;