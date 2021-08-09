import React from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';
import presetsData from "./presets/presetsData.json";
import ImageDisplay from "./components/imageDisplay";
import ImageSettings from "./components/imageSettings";
import NoiseSettings from "./components/noiseSettings";
import Separator from "./components/separator";
import Render from "./noiseGeneration/render";
import MouseEvents from './noiseGeneration/mouseEvents';
import Validate from "./noiseGeneration/validate";
import ColorsSettings from "./components/colorsSettings";

class App extends React.Component{
  constructor(props){
    super(props);
    //bind functions
    this.changePreset = this.changePreset.bind(this);
    this.inputUpdateCanvas = this.inputUpdateCanvas.bind(this);
    this.checkboxUpdateCanvas = this.checkboxUpdateCanvas.bind(this);
    this.colorUpdateCanvas = this.colorUpdateCanvas.bind(this);
    this.generateSeed = this.generateSeed.bind(this);
    this.exportSettings = this.exportSettings.bind(this);
    this.importSettings = this.importSettings.bind(this);
    this.addColor = this.addColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.getState = this.getState.bind(this);
    this.offsetsUpdateCanvas = this.offsetsUpdateCanvas.bind(this);

    //get presets data of json file
    const defaultPresetInfo = presetsData.presets.filter(preset =>{
      return preset.name===presetsData.default;
    })[0];
    const defaultPresetData = require(`./presets/${defaultPresetInfo.path}`);

    //set initial state
    this.state={
      selectedPresetName:defaultPresetInfo.name,
      ...defaultPresetData
    }
  }
  getState(){return this.state}
  componentDidMount(){
    const canvas = Render.init();
    MouseEvents.init(canvas, this.getState, this.inputUpdateCanvas, this.offsetsUpdateCanvas);
    this.renderCanvas();
    //this.generateSeed();
  }

  //Update Input Methods
  generateSeed(){
    const randomSeed = Math.random();
    this.setState({seed: randomSeed}, ()=> this.renderCanvas());
  }
  changePreset(name) {
    console.log(name);
    const defaultPresetInfo = presetsData.presets.filter(preset =>{
      return preset.name===name;
    })[0];
    const defaultPresetData = require(`./presets/${defaultPresetInfo.path}`);
    this.setState({
      selectedPresetName:defaultPresetInfo.name,
      ...defaultPresetData
    }, ()=> this.renderCanvas())
  }
  offsetsUpdateCanvas(x,y){
    const valueX =Validate("xOffset", x);
    const valueY =Validate("yOffset", y);
    if (valueX!==false && valueY!==false) {
      this.setState({ xOffset: valueX, yOffset: valueY }, ()=> this.renderCanvas());
    }
  }
  inputUpdateCanvas(e){
    const value =Validate(e.target.name, e.target.value);
    if (value!==false) {
      this.setState({ [e.target.name]: value }, ()=> this.renderCanvas());
    }
  }
  checkboxUpdateCanvas(e){
    this.setState({ [e.target.name]: e.target.checked }, ()=> this.renderCanvas());
  }
  colorUpdateCanvas(colorInput, breakpointInput,index){
    const value =Validate('breakpoint', breakpointInput.value);
    if (value!==false) {
      let colors = [...this.state.colors];
      let item = {
        breakpoint: value,
        value: colorInput.value
      };
      colors[index] = item;
      this.setState({colors}, ()=> this.renderCanvas() );
    }
  }
  addColor(){
    let colors = [...this.state.colors];
    const lastItem = colors[colors.length-1];
    let newBreakpoint;
    let newValue;
    if (lastItem) {
      newBreakpoint = lastItem.breakpoint*1+(1-lastItem.breakpoint*1)/2;
      newBreakpoint = Math.round(newBreakpoint * 100) / 100     
      newValue=lastItem.value;
    }else{
      newBreakpoint=0;
      newValue ="#000000";
    }
    let item = {
      breakpoint: newBreakpoint,
      value: newValue
    };
    colors.push(item);
    this.setState({colors}, ()=> this.renderCanvas() );   
  }
  removeColor(index){
    let colors = [...this.state.colors];
    colors.splice(index, 1);
    this.setState({colors}, ()=> this.renderCanvas() );   
  }
  async renderCanvas(){
      Render.renderCanvas(this.state);
  }

  //settings
  exportSettings(){
    const exportData = JSON.parse(JSON.stringify(this.state));
    delete exportData.isLoading;
    delete exportData.selectedPresetName;
    const jsonData = JSON.stringify(exportData, null, 2);
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

  render(){
    return (
      <div className="bg-gray-70 h-full">
        <Navbar list={presetsData.presets} selectedPresetName={this.state.selectedPresetName} onChangePreset={this.changePreset}/>
        <div className="p-20 h-screen">
          <div className=" h-full flex flex-grow flex-nowrap px-40">
            {/* Left: image display and noise settings */}
            <div className="  w-3/5  p-10 overflow-hidde flex flex-col ">
              <ImageDisplay  {...this.state} inputChangeHandler={this.inputUpdateCanvas} />
              <NoiseSettings noiseSettings={this.state} 
                            inputChangeHandler={this.inputUpdateCanvas} 
                            checkboxChangeHandler={this.checkboxUpdateCanvas} 
                            colorChangeHandler={this.colorUpdateCanvas}
                            generateSeed={this.generateSeed}/>
              <pre className="block text-gray-10 my-10 p-10">
                { JSON.stringify(this.state, null, 2) }
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
              <Separator horizontal={true} />
              <ImageSettings scale={this.state.scale} 
                              inputChangeHandler={this.inputUpdateCanvas} 
                              checkboxChangeHandler={this.checkboxChangeHandler}
                              download={()=>Render.saveImage(this.state.scale)}
                              exportSettings={this.exportSettings}
                              importSettings={this.importSettings}
                              forceRender={this.renderCanvas}/>
            </div>

          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
