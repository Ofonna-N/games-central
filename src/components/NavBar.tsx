import logo from "../assets/react.svg";

const NavBar = () => {
  return (
    <div className="flex items-center ">
      <img src={logo} alt="site logo" />
      <span className="ml-2">Navbar</span>
    </div>
  );
};

export default NavBar;
