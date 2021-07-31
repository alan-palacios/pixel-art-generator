import ImageDisplay from "./imageDisplay";
import ImageSettings from "./imageSettings";
import NoiseSettings from "./noiseSettings";
import Separator from "./separator";

function Home() {
  return (
    <div className=" h-full flex flex-grow flex-nowrap">
      <div className="  w-full  p-10 overflow-hidden flex flex-col ">
        <ImageDisplay />
        <ImageSettings />
      </div>
      <Separator/>
      <NoiseSettings />
    </div>
  );
}

export default Home;
