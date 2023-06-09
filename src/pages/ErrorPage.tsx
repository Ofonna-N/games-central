import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import setTheme from "../utility/setTheme";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  setTheme();
  const error = useRouteError();

  return (
    <>
      <nav className="px-[2rem]">
        <NavBar />
      </nav>
      <div className="h-full flex justify-center items-center mt-[15rem]">
        <h1 className="text-center md:text-[5rem] lg:text-[8rem] h-fit">
          {isRouteErrorResponse(error) ? error.data : "Opps! unexpected Error"}
        </h1>
      </div>
    </>
  );
};

export default ErrorPage;
