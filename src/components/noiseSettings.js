import ColorPicker from "./color-picker";

const { default: InputRange } = require("./input-range");
const { default: InputText } = require("./input-text");
const { default: Title } = require("./title");

function NoiseSettings() {
  
  return (
    <div className="h-full p-10 pl-20 w-2/5">
      <Title title="Noise Settings" />
      <form className="pt-5 font-montserrat-m">
        <InputText inputName="Seed" />
        <div className="flex space-x-10" >
          <InputText inputName="Width" />
          <InputText inputName="Height" />
        </div>
        <InputRange inputName="Octaves" default={4} min={0} max={10} step={1} />
        <InputRange inputName="Amplitude" default={0.1} min={0} max={5} step={0.1} />
        <InputRange inputName="Persistence" default={0.3} min={0} max={3} step={0.1} />
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
