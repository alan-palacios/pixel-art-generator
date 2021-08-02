import InputButton from "./input-button";
import InputCheckbox from "./input-checkbox";
import InputText from "./input-text";
import Title from "./title";
import downloadIcon from '@iconify/icons-fa-solid/download';
import fileImport from '@iconify/icons-fa-solid/file-import';
import fileExport from '@iconify/icons-fa-solid/file-export';
import InputFile from "./input-file";

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
          <InputButton label="Download" size="w-40" onClick={props.download} icon={downloadIcon}/>
          <InputButton  label="Export" size="w-40" onClick={props.exportSettings} icon={fileExport} />
          <InputFile label="Import" size="w-72" fileChangeHandler={props.importSettings} icon={fileImport}/>
        </div>

    </div>
  );
}

export default ImageSettings;
