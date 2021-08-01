
function InputButton(props) {
  return (
    <div className={`pt-5 ${props.size}`}>
      <button className="appearance-none block w-full mt-2 
                                bg-gray-10 h-10 rounded-lg px-3 text-gray-70  leading-tight
                                 focus:outline-none focus:ring  ring-gray-90
                                 hover:bg-gray-30 transition-colors transition-duration-200" >
        {props.name}
      </button>
    </div>

  );
}

export default InputButton;
