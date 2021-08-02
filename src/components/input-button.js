import { Icon} from '@iconify/react';

function InputButton(props) {
  function renderLabelIcon(){
    if (props.icon && props.label) {
      return  (
        <div className="flex content-between">
          <div className="w-1/2">{props.label} </div>
          <div className="w-1/2">
            <Icon icon={props.icon} style={{fontSize: '24px'}} className="m-auto mr-0" />
          </div>
        </div>
            );
    }else if (props.icon && props.label==null) {
      return(<div>
              <Icon icon={props.icon} style={{fontSize: '24px'}} className="m-auto" />
            </div>);
    }else if(props.label && props.icon == null){
      return(<span>{props.label} </span>);
    }
  }

  return (
    <div className={`pt-5 ${props.size}`}>
      <span className= {`text-gray-10 block ${props.labelShow}`}>
        &nbsp;
      </span>
      <button onClick={props.onClick} type="button" className="appearance-none block w-full mt-2 
                                bg-gray-10 h-10 rounded-lg px-3 text-gray-70  leading-tight
                                 focus:outline-none focus:ring  ring-gray-90
                                 hover:bg-gray-30 transition-colors transition-duration-200 " >
          {renderLabelIcon()}
      </button>
    </div>

  );
}

export default InputButton;
