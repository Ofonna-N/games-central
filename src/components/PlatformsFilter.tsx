import usePlatforms from "../hooks/app/usePlatforms.";
import useQueryStore from "../store/GameQueryStore";

import DropDown from "./utility/dropDown/DropDown";
import DropDownItem from "./utility/dropDown/DropDownItem";

const PlatformsFilter = () => {
  const selectedPlatform = useQueryStore((state) => state.gameQuery.platform);
  const setPlatform = useQueryStore((state) => state.setPlatform);

  const { data } = usePlatforms();

  return (
    <DropDown title={selectedPlatform?.name || "Platforms"}>
      <DropDownItem onItemClick={() => setPlatform(null)}>All</DropDownItem>
      {data?.results.map((platform) => (
        <DropDownItem
          key={platform.id}
          onItemClick={() => {
            setPlatform(platform);
          }}
        >
          {platform.name}
        </DropDownItem>
      ))}
    </DropDown>
  );
};

export default PlatformsFilter;
