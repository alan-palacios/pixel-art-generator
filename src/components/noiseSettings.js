import InputButton from "./input-button";
import InputCheckbox from "./input-checkbox";
import diceIcon from '@iconify/icons-fa-solid/dice';
import Separator from "./separator";
import plusIcon from '@iconify/icons-fa-solid/plus';
import minusIcon from '@iconify/icons-fa-solid/minus';
import React, { useState } from "react";
import Icon from "@iconify/react";

const { default: InputRange } = require("./input-range");
const { default: InputText } = require("./input-text");
const { default: Title } = require("./title");

function NoiseSettings(props) {
  const [showMoreOpt, setShowMoreOpt] = useState(false);

  function renderOptions() {
   if(showMoreOpt){
        return(
          <React.Fragment>
            <div className="flex space-x-8 md:space-x-10" >
              <div className="w-1/2">
                  <InputRange label="X Offset" name="xOffset"  min={-1000} max={1000} step={0.0001} 
                    value={props.noiseSettings.xOffset} onlyRange={true}
                    inputChangeHandler={props.inputChangeHandler} className="" />
                  <InputRange label="Y Offset" name="yOffset"  min={-1000} max={1000} step={0.0001} 
                    value={props.noiseSettings.yOffset} onlyRange={true}
                    inputChangeHandler={props.inputChangeHandler} className="" />
              </div>
              <div className="w-1/2">
                <InputRange label="Zoom"  name="zoom" min={-1} max={1000} step={1} 
                    value={props.noiseSettings.zoom}
                    inputChangeHandler={props.inputChangeHandler}  />
              </div>
            </div>
            <Separator horizontal={true} />
          </React.Fragment>
        );
   } 
  }

  const toggle = () => {
    setShowMoreOpt(!showMoreOpt);
  }

  return (
    <div className="h-full w-full pt-5">
      <div className="flex space-x-5" >
        <Title title="Noise Settings" />
        <div className={`my-auto`}>
          <button onClick={toggle} type="button" className="appearance-none block w-full  
                                     h-10 rounded-lg px-3 text-gray-10  leading-tight
                                    focus:outline-none focus:ring  ring-gray-90
                                    hover:bg-gray-50 transition-colors transition-duration-200 " >
            <Icon icon={!showMoreOpt?plusIcon:minusIcon} style={{fontSize: '20px'}} className="m-auto" />
          </button>
        </div>
      </div>

      <Separator horizontal={true} />
      <div className="pt-0 font-montserrat-m text-xs">
        {renderOptions()}

        <div className="flex space-x-8 md:space-x-10" >
          <div className="w-1/2">
            <div className="flex space-x-2 md:space-x-10" >
              <InputText label="Seed" name="seed" size="w-full"
                      value={props.noiseSettings.seed}
                      inputChangeHandler={props.inputChangeHandler}/>
              <InputButton  size="w-1/6" icon={diceIcon} onClick={props.generateSeed } />
            </div>


            <div className="flex space-x-2 md:space-x-10" >
              <InputText label="Width" name="pixelsWidth"
                        value={props.noiseSettings.pixelsWidth}
                        inputChangeHandler={props.inputChangeHandler}/>
              <InputText label="Height" name="pixelsHeight" 
                        value={props.noiseSettings.pixelsHeight}
                        inputChangeHandler={props.inputChangeHandler}/>
            </div>

            <div className="flex space-x-2 md:space-x-10" >
              <div className="flex space-x-2 md:space-x-10 w-2/3">
                <InputCheckbox label="Grayscale" 
                          value={props.noiseSettings.grayScale} 
                          name="grayScale"
                          checkboxChangeHandler={props.checkboxChangeHandler} size=""/>
                <div className={`pt-2 w-1/3 relative `}>
                  <span className="text-gray-10 block text-center">
                    Tint
                  </span>
                  <input type="color" name="tint"
                          value={props.noiseSettings.tint} 
                          onInput={ props.inputChangeHandler} 
                          className="appearance-none block w-full  mb-0 mt-1 
                              bg-gray-50 h-10 rounded-lg  overflow-hidden shadow-inner 
                                focus:outline-none focus:ring  ring-gray-90" />
                </div>
              </div>
 
              <InputCheckbox label="Transp." 
                          value={props.noiseSettings.transparency} 
                          name="transparency"
                          checkboxChangeHandler={props.checkboxChangeHandler} size="w-1/2"/>             
            </div>
            <InputRange label="Falloff"  name="falloff" min={0} max={10} step={0.001} 
                        value={props.noiseSettings.falloff}
                        inputChangeHandler={props.inputChangeHandler}  />

          </div>
          <div className="w-1/2">
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
