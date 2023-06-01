import { useState } from "react";
import { Platform } from "../hooks/app/useGames";
import usePlatforms from "../hooks/app/usePlatforms.";
import { RxCaretDown } from "react-icons/rx";

type Props = {
  selectedPlatform: Platform | null;
  setSelectedPlatform: (platform: Platform | null) => void;
};

const PlatformsFilter = ({ selectedPlatform, setSelectedPlatform }: Props) => {
  const { data } = usePlatforms();
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
        {selectedPlatform?.name || "Platforms"}
        <span className="text-[2.5rem]">
          <RxCaretDown />
        </span>
      </button>
      <ul
        className={`bg-dark-secondary absolute py-[1rem] w-[20rem] rounded-xl h-[40rem] overflow-auto ${
          toggle ? "block" : "hidden"
        } shadow-xl shadow-black`}
      >
        <li>
          <button
            className="p-[1rem] w-full text-left hover:bg-dark-primary"
            onClick={() => {
              setSelectedPlatform(null);
            }}
          >
            All
          </button>
        </li>
        {data.map((platform) => (
          <li key={platform.id}>
            <button
              className="p-[1rem] w-full text-left hover:bg-dark-primary"
              onClick={() => {
                setSelectedPlatform(platform);
              }}
            >
              {platform.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformsFilter;
