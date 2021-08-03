import { InlineIcon } from '@iconify/react';
import codeIcon from '@iconify/icons-fa-solid/code';
import keyboardIcon from '@iconify/icons-fa-solid/keyboard';

function Footer() {
  return (
    <div className="w-full bg-gray-90 text-gray-10 h-14 fixed bottom-0 p-2 flex font-montserrat-m">
      <div className="flex m-auto space-x-2">
        <InlineIcon icon={codeIcon} className="m-auto" />
        <span className="m-auto text-center"> with a </span>
        <InlineIcon icon={keyboardIcon} className="m-auto" />
        <span className="m-auto text-center">by Alan Palacios</span>
      </div>
      <div className="right-0 mr-5  absolute">
        <span className="w-10">
          was it useful to you? buy me a coffee :)
        </span>
      </div>
    </div>
  );
}

export default Footer;
