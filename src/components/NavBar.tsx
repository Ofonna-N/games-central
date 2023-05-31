import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div className="flex items-center gap-2 justify-between py-[2.5rem]">
      <img src={logo} alt="site logo" />

      <ColorModeSwitch />
    </div>
  );
};

export default NavBar;
