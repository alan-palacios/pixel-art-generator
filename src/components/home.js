import ImageDisplay from "./imageDisplay";
import ImageSettings from "./imageSettings";
import NoiseSettings from "./noiseSettings";
import Separator from "./separator";
import React from "react";
import Render from "../noiseGeneration/render";
import Validate from "../noiseGeneration/validate";
import ColorsSettings from "./colorsSettings";

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
    this.addColor = this.addColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
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
      scale:2,
      transparency:true,
      grayScale:false,
      tint: "#738d5f"
    }
  }
  componentDidMount(){
    this.generateSeed();
  } 
  inputChangeHandler(event) {
    if (Validate.validate(event.target.name, event.target.value)) {
      this.setState({ [event.target.name]: event.target.value });
    }
  } 
  checkboxChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.checked });
  }
  
  inputUpdateCanvas(e){
    if (Validate(e.target.name, e.target.value)) {
      this.setState({ [e.target.name]: e.target.value }, ()=> this.renderCanvas());
    }
  }
  checkboxUpdateCanvas(e){
    this.setState({ [e.target.name]: e.target.checked }, ()=> this.renderCanvas());
  }
  colorUpdateCanvas(colorInput, breakpointInput,index){
    if (Validate('breakpoint', breakpointInput.value)) {
      let colors = [...this.state.colors];
      let item = {
        breakpoint: breakpointInput.value,
        value: colorInput.value
      };
      colors[index] = item;
      this.setState({colors}, ()=> this.renderCanvas() );
    }
  }
  addColor(){
    let colors = [...this.state.colors];
    const lastItem = colors[colors.length-1];
    let newBreakpoint = lastItem.breakpoint*1+(1-lastItem.breakpoint*1)/2;
    newBreakpoint = Math.round(newBreakpoint * 100) / 100

    let item = {
      breakpoint: newBreakpoint,
      value: lastItem.value
    };
    colors.push(item);
    this.setState({colors}, ()=> this.renderCanvas() );   
  }
  removeColor(index){
    let colors = [...this.state.colors];
    colors.splice(index, 1);
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
        <div className=" h-full flex flex-grow flex-nowrap px-40">
          {/* Left: image display and noise settings */}
          <div className="  w-3/5  p-10 overflow-hidde flex flex-col ">
            <ImageDisplay  />
            <NoiseSettings noiseSettings={this.state} 
                          inputChangeHandler={this.inputUpdateCanvas} 
                          checkboxChangeHandler={this.checkboxUpdateCanvas} 
                          colorChangeHandler={this.colorUpdateCanvas}
                          generateSeed={this.generateSeed}/>
            <pre className="block text-gray-10 my-10 p-10">
              {JSON.stringify(this.state, null, 2)}
            </pre>
          </div>
          <Separator/>
          {/* Right: colors settings and download, import and export */}
          <div className="h-full  w-2/5  p-10 overflow-hidde flex flex-col ">
            <ColorsSettings noiseSettings={this.state} 
                            inputChangeHandler={this.inputUpdateCanvas} 
                            checkboxChangeHandler={this.checkboxUpdateCanvas} 
                            colorChangeHandler={this.colorUpdateCanvas}
                            generateSeed={this.generateSeed}
                            removeColor={this.removeColor}
                            addColor={this.addColor}/>
            <Separator vertical={true} />
            <ImageSettings imageSettings={this.state} 
                            inputChangeHandler={this.inputUpdateCanvas} 
                            checkboxChangeHandler={this.checkboxChangeHandler}
                            download={Render.saveImage}
                            exportSettings={this.exportSettings}
                            importSettings={this.importSettings}
                            forceRender={this.renderCanvas}/>
          </div>

        </div>

      </React.Fragment>
    )
  }
}

export default Home;
