import { useState } from "react";
import setTheme from "../utility/setTheme";

const ColorModeSwitch = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const onSwitch = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }

    setIsDark(localStorage.getItem("theme") === "dark");
    setTheme();
  };

  return (
    <label
      className="flex items-center cursor-pointer gap-[1rem]"
      htmlFor="switch"
    >
      <h3 className="text-gray-950 font-bold dark:text-white">Dark Mode</h3>

      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          id="switch"
          onChange={onSwitch}
          checked={isDark}
        />
        <div className="block bg-gray-500 peer-checked:bg-green-700 w-14 h-8 rounded-full"></div>
        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-all peer-checked:left-[45%]"></div>
      </div>
    </label>
  );
};

export default ColorModeSwitch;
