import ImageDisplay from "./imageDisplay";
import ImageSettings from "./imageSettings";
import NoiseSettings from "./noiseSettings";
import Separator from "./separator";
import React from "react";
import Render from "../noiseGeneration/render";

class Home extends React.Component {
  constructor(props){
    super(props);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this);
    this.inputUpdateCanvas = this.inputUpdateCanvas.bind(this);
    this.checkboxUpdateCanvas = this.checkboxUpdateCanvas.bind(this);
    this.colorUpdateCanvas = this.colorUpdateCanvas.bind(this);
    this.generateSeed = this.generateSeed.bind(this);
    this.exportSettings = this.exportSettings.bind(this);
    this.importSettings = this.importSettings.bind(this);
    this.state = {
      seed: "seed",
      pixelsWidth:600,
      pixelsHeight:400,
      octaves:7,
      amplitude:4,
      persistence:0.6,
      colors:[
        {
          breakpoint: 0,
          value: "#75bbee"
        },
        {
          breakpoint: 0.46,
          value: "#f7e988"
        },
        {
          breakpoint: 0.6,
          value: "#c0dd5e"
        }
      ],
      width:200,
      height:100,
      transparency:true,
      grayScale:false
    }
  }
  componentDidMount(){
    this.generateSeed();
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
    let colors = [...this.state.colors];
    let item = {
      breakpoint: breakpointInput.value,
      value: colorInput.value
    };
    colors[index] = item;
    this.setState({colors}, ()=> this.renderCanvas() );
  }

  renderCanvas =()=>{
    Render.renderCanvas(this.state);
  }
  generateSeed(){
    const randomSeed = Math.random();
    this.setState({seed: randomSeed}, ()=> this.renderCanvas());
  }

  exportSettings(){
    const jsonData = JSON.stringify(this.state, null, 2);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([jsonData], {
      type: "text/plain"
    }));
    a.setAttribute("download", "settings.json");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  importSettings(e){
    var files = e.target.files;
       var file = files[0];           
       var reader = new FileReader();
       reader.onload = (event)=> {
          const data = JSON.parse(event.target.result);
          this.setState({...data}, ()=> this.renderCanvas());
       }
       reader.readAsText(file)

  }

  render () {
    return (
      <React.Fragment>
        <div className=" h-full flex flex-grow flex-nowrap px-20">
          <div className="  w-full  p-10 overflow-hidde flex flex-col ">
            <button onClick={this.renderCanvas} className="bg-gray-50 p-3">Render</button>
            <ImageDisplay  />
            <ImageSettings imageSettings={this.state} 
                            inputChangeHandler={this.inputUpdateCanvas} 
                            checkboxChangeHandler={this.checkboxChangeHandler}
                            download={Render.saveImage}
                            exportSettings={this.exportSettings}
                            importSettings={this.importSettings}/>
            <pre className="block text-gray-10 mt-10">
              {JSON.stringify(this.state, null, 2)}
            </pre>
          </div>
          <Separator/>
          <NoiseSettings noiseSettings={this.state} 
                          inputChangeHandler={this.inputUpdateCanvas} 
                          checkboxChangeHandler={this.checkboxUpdateCanvas} 
                          colorChangeHandler={this.colorUpdateCanvas}
                          generateSeed={this.generateSeed}/>
        </div>

      </React.Fragment>
    )
  }
}

export default Home;
