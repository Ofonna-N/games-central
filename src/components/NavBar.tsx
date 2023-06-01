import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchbar from "./Searchbar";

type Props = {
  onSearch: (searchValue: string) => void;
};

const NavBar = ({ onSearch }: Props) => {
  return (
    <div className="flex items-center gap-[2rem] w-full py-[2.5rem]">
      <img src={logo} alt="site logo" />
      <Searchbar onSearch={onSearch} />
      <ColorModeSwitch />
    </div>
  );
};

export default NavBar;
