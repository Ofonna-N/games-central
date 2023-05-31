import { Platform } from "../hooks/app/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

type Props = {
  parent_platform: { platform: Platform }[];
};

const CardIconsList = ({ parent_platform }: Props) => {
  const iconMap: { [key: string]: JSX.Element } = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    android: <FaAndroid />,
    xbox: <FaXbox />,
    nintendo: <SiNintendo />,
    mac: <FaApple />,
    linus: <FaLinux />,
    ios: <MdPhoneIphone />,
    web: <BsGlobe />,
  };

  return (
    <ul className="flex gap-[1rem] text-gray-500 text-[2rem]">
      {parent_platform.map(({ platform }) => (
        <li key={platform.id}>{iconMap[platform.slug]}</li>
      ))}
    </ul>
  );
};

export default CardIconsList;
