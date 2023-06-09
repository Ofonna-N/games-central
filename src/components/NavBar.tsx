import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchbar from "./Searchbar";

const NavBar = () => {
  return (
    <div className="flex items-center gap-[2rem] w-full py-[2.5rem]">
      <Link to={"/"}>
        <img
          src={"/logo.png"}
          className="w-[5rem] aspect-square object-cover"
          alt="site logo"
        />
      </Link>
      <Searchbar />
      <ColorModeSwitch />
    </div>
  );
};

export default NavBar;
