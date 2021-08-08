function InputRange(props) {
  function renderTextIndicator() {
    if (!props.onlyRange) {
      return(
              <input type="text" value={props.value}  onChange={ e => props.inputChangeHandler(e)} name={props.name}
              className="appearance-none w-2/5 mt-1 min-w-1/5 
              bg-gray-50 h-10 rounded-lg px-3 text-gray-10 shadow-inner leading-tight
              focus:outline-none focus:ring  ring-gray-90" />   
      );
    }
  }
  return (
    <div className={`pt-2 ${props.className || '' }`}>
      <span className={`text-gray-10 block mb-0 ${props.labelShow}`}>
        {props.label}
      </span>
      <div className="flex space-x-5">
        {renderTextIndicator()}
        <input type="range" min={props.min} max={props.max} step={props.step} 
              value={props.value}  onChange={ e => props.inputChangeHandler(e)} name={props.name}
              className="appearance-none w-full m-auto 
             bg-gray-50 h-2 rounded-lg   shadow-inner " />
      </div>

    </div>

  );
}

export default InputRange;
