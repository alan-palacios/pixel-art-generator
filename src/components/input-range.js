import React, {useState} from "react";

function InputRange(props) {
  const [range, setRange] = useState(props.default);

  return (
    <div className="pt-5">
      <span className={`text-gray-10 block ${props.labelShow}`}>
        {props.inputName}
      </span>
      <div className="flex space-x-5">
        <input type="text" value={range}  onChange={ e => setRange(e.target.value)} 
              className="appearance-none w-1/5 mt-2 min-w-1/5 
              bg-gray-50 h-10 rounded-lg px-3 text-gray-10 shadow-inner leading-tight
              focus:outline-none focus:ring  ring-gray-90" />

        <input type="range" min={props.min} max={props.max} step={props.step} value={range} onChange={ e => setRange(e.target.value)}
              className="appearance-none w-full m-auto 
             bg-gray-50 h-2 rounded-lg   shadow-inner " />
      </div>

    </div>

  );
}

export default InputRange;
