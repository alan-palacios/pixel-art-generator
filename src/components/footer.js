import { InlineIcon } from '@iconify/react';
import codeIcon from '@iconify/icons-fa-solid/code';
import keyboardIcon from '@iconify/icons-fa-solid/keyboard';
import { Icon} from '@iconify/react';
import githubIcon from '@iconify/icons-fa-brands/github';

function Footer() {
  return (
    <div className="w-full bg-gray-90 text-gray-10 h-10 fixed bottom-0 p-2 flex font-montserrat-m">
      <a href="https://github.com/alan-palacios/pixel-art-generator" target="_blank" rel="noreferrer">
        <Icon icon={githubIcon} style={{fontSize: '24px'}} className="absolute ml-0" />
      </a>
      <div className="flex m-auto space-x-2">
        <InlineIcon icon={codeIcon} className="m-auto" />
        <span className="m-auto text-center"> with a </span>
        <InlineIcon icon={keyboardIcon} className="m-auto" />
        <span className="m-auto text-center">by Alan Palacios</span>
      </div>
      <div className="right-0  mr-5 top-0 h-full absolute flex">
        <span className="w-full m-auto">
          Was it useful for you? buy me a coffee :{')  '}
        </span>
        <form action="https://www.paypal.com/donate" method="post" target="_blank" className="m-auto ml-5 flex">
          <input type="hidden" name="hosted_button_id" value="LR2AUA7K5AZMY" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_MX/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </div>
  );
}

export default Footer;
