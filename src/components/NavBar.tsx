import ColorModeSwitch from "./ColorModeSwitch";
import Searchbar from "./Searchbar";

const NavBar = () => {
  return (
    <div className="flex items-center gap-[2rem] w-full py-[2.5rem]">
      <img src={"/logo.png"} className="w-[5rem]" alt="site logo" />
      <Searchbar />
      <ColorModeSwitch />
    </div>
  );
};

export default NavBar;
