import { Platform } from "../hooks/app/useGames";
import usePlatforms from "../hooks/app/usePlatforms.";

import DropDown from "./utility/dropDown/DropDown";
import DropDownItem from "./utility/dropDown/DropDownItem";

type Props = {
  selectedPlatform: Platform | null;
  setSelectedPlatform: (platform: Platform | null) => void;
};

const PlatformsFilter = ({ selectedPlatform, setSelectedPlatform }: Props) => {
  const { data } = usePlatforms();

  return (
    <DropDown title={selectedPlatform?.name || "Platforms"}>
      <DropDownItem onItemClick={() => setSelectedPlatform(null)}>
        All
      </DropDownItem>
      {data.map((platform) => (
        <DropDownItem
          key={platform.id}
          onItemClick={() => {
            setSelectedPlatform(platform);
          }}
        >
          {platform.name}
        </DropDownItem>
      ))}
    </DropDown>
  );
};

export default PlatformsFilter;
