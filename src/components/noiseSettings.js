import InputButton from "./input-button";
import InputCheckbox from "./input-checkbox";
import diceIcon from '@iconify/icons-fa-solid/dice';

const { default: InputRange } = require("./input-range");
const { default: InputText } = require("./input-text");
const { default: Title } = require("./title");

function NoiseSettings(props) {

  return (
    <div className="h-full w-full pt-5">
      <Title title="Noise Settings" />
      <div className="pt-5 font-montserrat-m">
        <div className="flex space-x-10" >
          <div className="w-1/2">
        <InputRange label="X Offset" name="xOffset"  min={-1000} max={1000} step={0.0001} 
                  value={props.xOffset} onlyRange={true}
                  inputChangeHandler={props.inputChangeHandler} />
         <InputRange label="Y Offset" name="yOffset"  min={-1000} max={1000} step={0.0001} 
                      value={props.yOffset} className="" onlyRange={true}
                      inputChangeHandler={props.inputChangeHandler} />
            <div className="flex space-x-10" >
              <InputText label="Seed" name="seed" size="w-full"
                      value={props.noiseSettings.seed}
                      inputChangeHandler={props.inputChangeHandler}/>
              <InputButton  size="w-1/6" icon={diceIcon} onClick={props.generateSeed } />
            </div>


            <div className="flex space-x-10" >
              <InputText label="Width" name="pixelsWidth"
                        value={props.noiseSettings.pixelsWidth}
                        inputChangeHandler={props.inputChangeHandler}/>
              <InputText label="Height" name="pixelsHeight" 
                        value={props.noiseSettings.pixelsHeight}
                        inputChangeHandler={props.inputChangeHandler}/>
            </div>

            <div className="flex space-x-10" >
              <InputCheckbox label="GrayScale" 
                        value={props.noiseSettings.grayScale} 
                        name="grayScale"
                        checkboxChangeHandler={props.checkboxChangeHandler} size="w-40"/>
              <div className={`pt-2 w-40 relative `}>
                <span className="text-gray-10 block">
                  Tint
                </span>
                <input type="color" name="tint"
                        value={props.noiseSettings.tint} 
                        onInput={ props.inputChangeHandler} 
                        className="appearance-none block w-full  mb-0 mt-1 
                            bg-gray-50 h-10 rounded-lg  overflow-hidden shadow-inner 
                              focus:outline-none focus:ring  ring-gray-90" />
              </div> 
              <InputCheckbox label="Transparency" 
                          value={props.noiseSettings.transparency} 
                          name="transparency"
                          checkboxChangeHandler={props.checkboxChangeHandler} size="w-40"/>             
            </div>
            <InputRange label="Falloff"  name="falloff" min={0} max={10} step={0.001} 
                        value={props.noiseSettings.falloff}
                        inputChangeHandler={props.inputChangeHandler}  />

          </div>
          <div className="w-1/2">
            <InputRange label="Zoom"  name="zoom" min={-1} max={1000} step={1} 
                        value={props.noiseSettings.zoom}
                        inputChangeHandler={props.inputChangeHandler}  />
            <InputRange label="Octaves"  name="octaves" min={1} max={15} step={1} 
                        value={props.noiseSettings.octaves}
                        inputChangeHandler={props.inputChangeHandler}  />

            <InputRange label="Lacunarity" name="lacunarity" min={0} max={10} step={0.001} 
                        value={props.noiseSettings.lacunarity}
                        inputChangeHandler={props.inputChangeHandler} />
            <InputRange label="Persistence" name="persistence"  min={0.001} max={3} step={0.001} 
                        value={props.noiseSettings.persistence}
                        inputChangeHandler={props.inputChangeHandler} />
            <InputRange label="Min Value" name="minValue"  min={-1} max={1} step={0.001} 
                        value={props.noiseSettings.minValue}
                        inputChangeHandler={props.inputChangeHandler} />
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default NoiseSettings;
