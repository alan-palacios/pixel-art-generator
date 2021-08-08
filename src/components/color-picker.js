import React from "react";
import InputButton from "./input-button";
import trashAlt from '@iconify/icons-fa-solid/trash-alt';

class ColorPicker extends React.Component {

  componentDidMount(){
    this.colorInput = document.getElementById(`${this.props.dataKey}color`);
    this.breakpointRange = document.getElementById(`${this.props.dataKey}breakpointR`);
    this.breakpointText = document.getElementById(`${this.props.dataKey}breakpointT`);
  }

  render(){
    return (
      <div className={`pt-2 ${this.props.size}`}>
        <span className= {`text-gray-10 block ${this.props.labelShow}`}>
          {this.props.inputName}
        </span>
        <div className="flex space-x-5">
          <input type="text" value={this.props.breakpoint}  
                id={`${this.props.dataKey}breakpointT`}
                onChange={ () => this.props.colorChangeHandler(this.colorInput, this.breakpointText, this.props.dataKey)} 
                className="appearance-none w-1/5 mt-1 min-w-1/5 
                bg-gray-50 h-10 rounded-lg px-3 text-gray-10 shadow-inner leading-tight
                focus:outline-none focus:ring  ring-gray-90" />

          <input type="range" min={this.props.min} max={this.props.max} step={this.props.step}  
                id={`${this.props.dataKey}breakpointR`}
                value={this.props.breakpoint} 
                onChange={ () => this.props.colorChangeHandler(this.colorInput, this.breakpointRange, this.props.dataKey)} 
                className="appearance-none w-full m-auto 
              bg-gray-50 h-2 rounded-lg   shadow-inner " />

          <input type="color" id={`${this.props.dataKey}color`}
                  value={this.props.color} 
                  onInput={ () => this.props.colorChangeHandler(this.colorInput, this.breakpointText, this.props.dataKey)} 
                  className="appearance-none block w-2/5 mt-1 
                            bg-gray-50 h-10 rounded-lg  overflow-hidden shadow-inner 
                              focus:outline-none focus:ring  ring-gray-90" />
          <InputButton icon={trashAlt} onClick={()=> this.props.removeColor(this.props.dataKey)}/>
        </div>

      </div>

    );
  }

}

export default ColorPicker;
