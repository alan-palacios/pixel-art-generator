import Dropdown from "./dropdown";
import caretDown from '@iconify/icons-fa-solid/caret-down';

function Navbar(props) {

  return (
    <div className="w-full bg-gray-90 text-gray-10 h-14 fixed top-0 p-2 flex z-10">
      <span className="m-auto ml-5 text-2xl font-tysla">Pixel art generator</span>
      <Dropdown  icon={caretDown} list={props.list} label={props.selectedPresetName} onChangePreset={props.onChangePreset}/>
    </div>
  );
}

export default Navbar;
