
function InputCheckbox(props) {
  return (
    <div className={`pt-5 ${props.size} relative `}>
      <span className="text-gray-10 block text-center">
        {props.inputName}
      </span>
      <input type="checkbox" className="opacity-0 absolute h-10 w-full mt-2" checked={props.value} name={props.name}  onChange={ e => props.checkboxChangeHandler(e)}/>
      <div className="  w-10 m-auto mt-2 bg-gray-50 h-10 rounded-lg  shadow-inner flex">
        <svg className="fill-current hidden w-6 h-6 m-auto" width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.3753 0.672109C22.8331 0.236249 23.4424 -0.00471291 24.0745 6.98599e-05C24.7066 0.00485263 25.3121 0.255006 25.7633 0.697745C26.2144 1.14048 26.476 1.74118 26.4927 2.37308C26.5094 3.00497 26.28 3.61865 25.8528 4.08461L12.8853 20.3021C12.6623 20.5423 12.3932 20.735 12.094 20.8688C11.7949 21.0026 11.4718 21.0747 11.1441 21.0807C10.8165 21.0868 10.4909 21.0267 10.187 20.9041C9.88309 20.7815 9.60702 20.5989 9.3753 20.3671L0.775802 11.7676C0.53632 11.5445 0.344238 11.2754 0.211014 10.9764C0.0777904 10.6774 0.00615389 10.3546 0.000379339 10.0273C-0.00539521 9.70003 0.0548106 9.37493 0.177404 9.07142C0.299997 8.76791 0.482467 8.4922 0.713928 8.26074C0.945389 8.02928 1.2211 7.84681 1.52461 7.72421C1.82812 7.60162 2.15322 7.54141 2.4805 7.54719C2.80779 7.55296 3.13055 7.6246 3.42955 7.75782C3.72855 7.89105 3.99765 8.08313 4.2208 8.32261L11.0263 15.1249L22.3136 0.743611C22.3339 0.718588 22.3556 0.694717 22.3786 0.672109H22.3753Z" fill="#BCBCBC"/>
        </svg>
      </div>
    </div>

  );
}

export default InputCheckbox;
