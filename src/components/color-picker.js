function ColorPicker(props) {
  let colorInput = document.getElementById(`${props.dataKey}color`);
  let breakpointRange = document.getElementById(`${props.dataKey}breakpointR`);
  let breakpointText = document.getElementById(`${props.dataKey}breakpointT`);

  return (
    <div className={`pt-5 ${props.size}`}>
      <span className= {`text-gray-10 block ${props.labelShow}`}>
        {props.inputName}
      </span>
      <div className="flex space-x-5">
        <input type="text" value={props.breakpoint}  
              id={`${props.dataKey}breakpointT`}
              onChange={ () => props.colorChangeHandler(colorInput, breakpointText, props.dataKey)} 
              className="appearance-none w-1/5 mt-2 min-w-1/5 
              bg-gray-50 h-10 rounded-lg px-3 text-gray-10 shadow-inner leading-tight
              focus:outline-none focus:ring  ring-gray-90" />

        <input type="range" min={props.min} max={props.max} step={props.step}  
              id={`${props.dataKey}breakpointR`}
              value={props.breakpoint} 
              onChange={ () => props.colorChangeHandler(colorInput, breakpointRange, props.dataKey)} 
              className="appearance-none w-full m-auto 
             bg-gray-50 h-2 rounded-lg   shadow-inner " />

        <input type="color" id={`${props.dataKey}color`}
                value={props.color} 
                onChange={ () => props.colorChangeHandler(colorInput, breakpointText, props.dataKey)} 
                className="appearance-none block w-2/5 mt-2 
                          bg-gray-50 h-10 rounded-lg  overflow-hidden shadow-inner 
                            focus:outline-none focus:ring  ring-gray-90" />
      </div>

    </div>

  );
}

export default ColorPicker;
