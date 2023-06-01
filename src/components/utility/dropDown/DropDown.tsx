import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";

type Props = {
  title: string;
  children: React.ReactNode;
};

const DropDown = ({ children, title }: Props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative py-[2rem] dark:text-white">
      <button
        className="bg-dark-secondary font-bold px-[1rem] py-[1rem] w-[20rem] rounded-xl flex items-center justify-between text-[1.8rem] mb-1"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
        onBlur={() => setTimeout(() => setToggle(false), 100)}
      >
        {title}
        <span className="text-[2.5rem]">
          <RxCaretDown />
        </span>
      </button>
      <ul
        className={`bg-dark-secondary absolute py-[1rem] w-[20rem] rounded-xl max-h-[40rem] overflow-auto ${
          toggle ? "block" : "hidden"
        } shadow-xl shadow-black`}
      >
        {children}
      </ul>
    </div>
  );
};

export default DropDown;
