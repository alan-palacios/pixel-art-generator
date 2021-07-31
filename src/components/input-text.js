
function InputText(props) {
  return (
    <div className={`pt-5 ${props.size}`}>
      <span className="text-gray-10 block">
        {props.inputName}
      </span>
      <input type="text" className="appearance-none block w-full mt-2 
                                bg-gray-50 h-10 rounded-lg px-3 text-gray-10 shadow-inner leading-tight
                                 focus:outline-none focus:ring  ring-gray-90" />
    </div>

  );
}

export default InputText;
