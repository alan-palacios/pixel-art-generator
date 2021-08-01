import ColorPicker from "./color-picker";

const { default: InputRange } = require("./input-range");
const { default: InputText } = require("./input-text");
const { default: Title } = require("./title");

function NoiseSettings(props) {
  return (
    <div className="h-full p-10 pl-20 w-2/5">
      <Title title="Noise Settings" />
      <form className="pt-5 font-montserrat-m">
        <InputText label="Seed" name="seed"
                  renderCanvas={props.renderCanvas}
                  value={props.noiseSettings.seed}
                  inputChangeHandler={props.inputChangeHandler}/>

        <div className="flex space-x-10" >
          <InputText label="Width" name="pixelsWidth"
                    renderCanvas={props.renderCanvas}
                    value={props.noiseSettings.pixelsWidth}
                    inputChangeHandler={props.inputChangeHandler}/>

          <InputText label="Height" name="pixelsHeight" 
                    renderCanvas={props.renderCanvas}
                    value={props.noiseSettings.pixelsHeight}
                    inputChangeHandler={props.inputChangeHandler}/>
        </div>
        <InputRange label="Octaves"  name="octaves" min={1} max={15} step={1} 
                    value={props.noiseSettings.octaves}
                    renderCanvas={props.renderCanvas}
                    inputChangeHandler={props.inputChangeHandler}  />

        <InputRange label="Amplitude" name="amplitude" min={0.1} max={50} step={0.1} 
                    value={props.noiseSettings.amplitude}
                    renderCanvas={props.renderCanvas}
                    inputChangeHandler={props.inputChangeHandler} />

        <InputRange label="Persistence" name="persistence"  min={0.1} max={3} step={0.1} 
                    value={props.noiseSettings.persistence}
                    renderCanvas={props.renderCanvas}
                    inputChangeHandler={props.inputChangeHandler} />
        <div className="flex pt-10 text-gray-10">
          <label className="w-full">Breakpoint</label>
          <span className="min-w-1/5 mr-0 m-auto flex pl-5">
            <label className="m-auto ">Color</label>
          </span>
        </div>
        <ColorPicker  defaultColor="#77CFE2" default={0.5} min={0} max={1} step={0.01} size="" labelShow="hidden"/>
        <ColorPicker  defaultColor="#F8EC86" default={0.5} min={0} max={1} step={0.01} size="" labelShow="hidden"/>

      </form>
    </div>
  );
}

export default NoiseSettings;
