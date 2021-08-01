import ImageDisplay from "./imageDisplay";
import ImageSettings from "./imageSettings";
import NoiseSettings from "./noiseSettings";
import Separator from "./separator";
import React from "react";
import Perlin from "../noiseGeneration/perlin-noise";
import Render from "../noiseGeneration/render";

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      settings:{
        noiseSettings :{
          seed: "seed",
          width:600,
          height:400,
          octaves:7,
          amplitude:4,
          persistence:1,
          colors:[
            {
              breakpoint: 0.2,
              value: "#77CFE2"
            }
          ]

        },
        imageSettings:{
          width:200,
          height:100
        }
      }
    }
  }
  
  forceRender = ()=>{
    
    Render.renderCanvas(this.state.settings, this.updateNoise());
  }

  updateNoise = () => {
    const noiseSettings = this.state.settings.noiseSettings;
    let noiseGen = Perlin.generatePerlinNoise(noiseSettings.width, noiseSettings.height, {
      amplitude: noiseSettings.amplitude,
      octaveCount: noiseSettings.octaves,
      persistence: noiseSettings.persistence,
    });
    return noiseGen;
  }

  componentDidMount(){
    Render.renderCanvas(this.state.settings, this.updateNoise());
  }
  render () {
    return (
    <div className=" h-full flex flex-grow flex-nowrap">
      <div className="  w-full  p-10 overflow-hidden flex flex-col ">
        <ImageDisplay />
        <button onClick={this.forceRender} className="bg-gray-50 p-5">Render</button>
        <ImageSettings />
      </div>
      <Separator/>
      <NoiseSettings />
    </div>
    )
  }
}

export default Home;
