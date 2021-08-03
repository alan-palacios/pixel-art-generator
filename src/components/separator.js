
function Separator(props) {
  if (props.vertical) {
     return (
      <div className="w-full min-h-min px-10">
        <div className="bg-gray-90 h-1">
        </div>
      </div>
    );   
  } else {
    return (
      <div className=" h-full w-1 py-10">
        <div className="bg-gray-90 h-full">
        </div>
      </div>
    );   
  } 

}

export default Separator;
