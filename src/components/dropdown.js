import { Icon} from '@iconify/react';

function Dropdown(props) {

  
  return (
    <div className={` ${props.className } my-auto group`}>
      <button  type="button" className="appearance-none block w-full 
                                 h-10 rounded-lg px-3 
                                 focus:outline-none focus:ring  ring-gray-90
                                 hover:bg-gray-70 transition-colors transition-duration-200 " >

          {renderLabelIcon()}
      </button>
      {renderList()}
    </div>

  );
function renderLabelIcon(){
    if (props.icon && props.label) {
      return  (
        <div className="flex content-between">
          <div className="w-full">
            <span className="m-auto mr-5 md:text-lg font-montserrat-b">{props.label}</span>
          </div>
          <div className="">
            <Icon icon={props.icon} style={{fontSize: '24px'}} className="m-auto mr-0" />
          </div>
        </div>
            );
    }else if (props.icon && props.label==null) {
      return(<div>
              <Icon icon={props.icon} style={{fontSize: '24px'}} className="m-auto" />
            </div>);
    }else if(props.label && props.icon == null){
      return(<span className="m-auto mr-5 md:text-lg font-montserrat-b">{props.label}</span>);
    }
  }

  function renderList() {
       return (
       <div className="absolute top-10 right-0 hidden group-hover:block  
                      bg-gray-90 filter drop-shadow-lg shadow rounded-lg text-sm md:text-base">
        <ul>
          {props.list.map(item=>{
            return (
              <li  key={item.name} onClick={()=>props.onChangePreset(item.name)} 
                    className="px-5 py-2 hover:bg-gray-70 cursor-pointer select-none border-b-2 border-gray-70" >
                {item.name}
              </li>)
          })}
        </ul>
      </div>);     
  }
  
}

export default Dropdown;
