import InputButton from "./input-button";
import downloadIcon from '@iconify/icons-fa-solid/download';
import fileImport from '@iconify/icons-fa-solid/file-import';
import fileExport from '@iconify/icons-fa-solid/file-export';
import InputFile from "./input-file";
import InputText from "./input-text";

function ImageSettings(props) {
  return (
    <div className="pb-5 w-full flex-col space-y-5 h-1/3 flex font-montserrat-m">
          <InputText label="Scale" value={props.scale} inputChangeHandler={props.inputChangeHandler} name="scale"/>
          <InputButton label="Download" size="w-full" onClick={props.download} icon={downloadIcon}/>
          <InputButton  label="Export" size="w-full" onClick={props.exportSettings} icon={fileExport} />
          <InputFile label="Import" size="w-full" fileChangeHandler={props.importSettings} icon={fileImport}/>
    </div>
  );
}

export default ImageSettings;
