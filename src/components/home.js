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
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this);
    this.inputUpdateCanvas = this.inputUpdateCanvas.bind(this);
    this.checkboxUpdateCanvas = this.checkboxUpdateCanvas.bind(this);
    this.colorUpdateCanvas = this.colorUpdateCanvas.bind(this);
    this.state = {
      seed: "seed",
      pixelsWidth:600,
      pixelsHeight:400,
      octaves:7,
      amplitude:4,
      persistence:1,
      colors:[
        {
          breakpoint: 0,
          value: "#77CFE2"
        },
        {
          breakpoint: 0.4,
          value: "#D3FA85"
        }
      ],
      width:200,
      height:100,
      transparency:true,
      grayScale:true
    }
  }
  
  inputChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  } 
  checkboxChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.checked });
  }
  
  inputUpdateCanvas(e){
    this.setState({ [e.target.name]: e.target.value }, ()=> this.renderCanvas());
  }
  checkboxUpdateCanvas(e){
    this.setState({ [e.target.name]: e.target.checked }, ()=> this.renderCanvas());
  }

  colorUpdateCanvas(colorInput, breakpointInput,index){
    // 1. Make a shallow copy of the items
    let colors = [...this.state.colors];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...colors[index]};
    // 3. Replace the property you're intested in
    item.value = colorInput.value;
    item.breakpoint = breakpointInput.value;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    colors[index] = item;
    // 5. Set the state to our new copy
    this.setState({colors});
  }
  renderCanvas =()=>{
    Render.renderCanvas(this.state, this.updateNoise());
  }

  updateNoise = () => {
    Perlin.setSeed(this.state.seed);
    let noiseGen = Perlin.generatePerlinNoise(this.state.pixelsWidth, this.state.pixelsHeight, {
      amplitude: this.state.amplitude,
      octaveCount: this.state.octaves,
      persistence: this.state.persistence,
    });
    return noiseGen;
  }

  componentDidMount(){
    const randomSeed = Math.random();
    this.setState({seed: randomSeed}, ()=> this.renderCanvas());

  }
  render () {
    return (
      <React.Fragment>
        <div className=" h-full flex flex-grow flex-nowrap px-20">
          <div className="  w-full  p-10 overflow-hidde flex flex-col ">
            <button onClick={this.renderCanvas} className="bg-gray-50 p-3">Render</button>
            <ImageDisplay  />
            <ImageSettings imageSettings={this.state} inputChangeHandler={this.inputUpdateCanvas} checkboxChangeHandler={this.checkboxChangeHandler} />
            <pre className="block text-gray-10 mt-10">
              {JSON.stringify(this.state, null, 2)}
            </pre>
          </div>
          <Separator/>
          <NoiseSettings noiseSettings={this.state} 
                          inputChangeHandler={this.inputUpdateCanvas} 
                          checkboxChangeHandler={this.checkboxUpdateCanvas} 
                          colorChangeHandler={this.colorUpdateCanvas} />

        </div>

      </React.Fragment>


    )
  }
}

export default Home;
