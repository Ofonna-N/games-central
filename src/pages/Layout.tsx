import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import setTheme from "../utility/setTheme";

const Layout = () => {
  setTheme();
  return (
    <div>
      <nav className="x-[1rem] sm:px-[2rem] shadow-lg mb-4">
        <NavBar />
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
