
function ImageDisplay(props) {
  return (
        <div className=" flex max-w-full w-full min-h-80 max-h-80">
          <canvas id="image" className="m-auto w-full h-full object-contain"></canvas>
        </div>

  );
}

export default ImageDisplay;
