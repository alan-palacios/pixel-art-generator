import InputButton from "./button";
import InputCheckbox from "./input-checkbox";
import InputText from "./input-text";
import Title from "./title";

function ImageSettings(props) {
  return (
    <div className=" h-full flex-col flex font-montserrat-m">
      <Title title="Image Settings" />
        <div className="flex space-x-10" >
          <InputText label="Width" size="w-40" name="width" 
                          value={props.imageSettings.width} 
                          inputChangeHandler={props.inputChangeHandler}/>
          <InputText label="Height" size="w-40" name="height" 
                          value={props.imageSettings.height} 
                          inputChangeHandler={props.inputChangeHandler}/>
          <InputCheckbox label="Transparency" 
                          value={props.imageSettings.transparency} 
                          name="transparency"
                          checkboxChangeHandler={props.checkboxChangeHandler} size="w-40"/>
        </div>
        <div className="flex space-x-10" >
          <InputButton name="Download" size="w-40" />
          <InputButton name="Export" size="w-40" />
          <InputButton name="Import" size="w-40" />
        </div>

    </div>
  );
}

export default ImageSettings;
