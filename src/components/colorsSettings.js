import InputButton from "./input-button";
import ColorPicker from "./color-picker";
import plusIcon from '@iconify/icons-fa-solid/plus';

const { default: Title } = require("./title");

function ColorsSettings(props) {

  function renderColors(){
    return props.noiseSettings.colors.map( (color,index) =>(
            <ColorPicker key={index} min={0} max={1.3} step={0.01} size="" labelShow="hidden" 
                        dataKey={index}
                        color={color.value} 
                        breakpoint={color.breakpoint}
                        colorChangeHandler={props.colorChangeHandler}
                        removeColor={props.removeColor}/>
          ));
  }

  return (
    <div className="p-5 mb-5 w-full h-auto overflow-y-auto">
      <Title title="Colors Settings" />
      <div className=" font-montserrat-m">
        <div className="flex pt-10 text-gray-10">
          <label className="w-full">Breakpoint</label>
          <span className="min-w-1/5 mr-0 m-auto flex pl-5">
            <label className="m-auto ">Color</label>
          </span>
        </div>
        {renderColors()}
        <InputButton  className="mt-5 w-full" icon={plusIcon} onClick={props.addColor } />
      </div>
    </div>
  );
}

export default ColorsSettings;
