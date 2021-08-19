
function Separator(props) {
  if (props.horizontal) {
     return (
      <div className="w-full min-h-min px-10 pt-3 hidden md:block">
        <div className="bg-gray-50 h-px">
        </div>
      </div>
    );   
  } else {
    return (
      <div className=" h-full w-px py-10 hidden md:block">
        <div className="bg-gray-50 h-full">
        </div>
      </div>
    );   
  } 

}

export default Separator;
