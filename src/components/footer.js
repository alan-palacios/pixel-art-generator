import { InlineIcon } from '@iconify/react';
import codeIcon from '@iconify/icons-fa-solid/code';
import keyboardIcon from '@iconify/icons-fa-solid/keyboard';
import { Icon} from '@iconify/react';
import githubIcon from '@iconify/icons-fa-brands/github';

function Footer() {
  return (
    <div className="w-full bg-gray-90 text-gray-10 h-16 md:h-10 fixed bottom-0 pt-2 flex md:flex-col font-montserrat-m text-sm md:text-base">
      <div className="flex  fixed inset-x-0 ">
        <div className="flex m-auto space-x-2">
          <InlineIcon icon={codeIcon} className="m-auto" />
          <span className="m-auto text-center"> with a </span>
          <InlineIcon icon={keyboardIcon} className="m-auto" />
          <span className="m-auto text-center">by Alan Palacios</span>
        </div>
      </div>
      <div className="py-2 px-5 hidden md:flex">
        <a href="https://github.com/alan-palacios/pixel-art-generator" target="_blank" rel="noreferrer" className=" h-full">
          <Icon icon={githubIcon} style={{fontSize: '24px'}} className="ml-0" />
        </a>
        <div className="right-0 m-auto mr-5 top-0 h-full flex">
          <span className="w-full m-auto hidden md:block">
            Was it useful for you? buy me a coffee :{')  '}
          </span>
          <form action="https://www.paypal.com/donate" method="post" target="_blank" className="m-auto ml-5 flex">
            <input type="hidden" name="hosted_button_id" value="FH7F37W7RPR4J" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" className=""
                title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          </form>
        </div>
      </div>

      <div className="pb-1 px-5 flex md:hidden space-x-0 m-auto mb-0">
          <a href="https://github.com/alan-palacios/pixel-art-generator" target="_blank" rel="noreferrer" className=" m-auto">
            <Icon icon={githubIcon} style={{fontSize: '24px'}} className="ml-0" />
          </a>
          <div className=" m-auto flex">
            <form action="https://www.paypal.com/donate" method="post" target="_blank" className="m-auto ml-5 flex">
              <input type="hidden" name="hosted_button_id" value="FH7F37W7RPR4J" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" className=""
                  title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            </form>
        </div>

      </div>
    </div>
  );
}

export default Footer;
