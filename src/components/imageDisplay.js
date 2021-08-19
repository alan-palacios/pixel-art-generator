
function ImageDisplay(props) {
  return (
        <div className=" flex h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 ">
          <canvas id="image" className="m-auto w-full h-full object-contain "></canvas>
        </div>
  );
}

export default ImageDisplay;
