import useQueryStore from "../store/GameQueryStore";
import DropDown from "./utility/dropDown/DropDown";
import DropDownItem from "./utility/dropDown/DropDownItem";

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date Added" },
  { value: "name", label: "Name" },
  { value: "-release", label: "Release Date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average Rating" },
];

const SortingSelector = () => {
  const selectedSort = useQueryStore((state) => state.gameQuery.sort);

  const setSort = useQueryStore((state) => state.setSort);

  const sort = sortOrders.find((value) => value.value === selectedSort);

  return (
    <DropDown title={sort?.label || "Relevance"}>
      {sortOrders.map((sort) => (
        <DropDownItem key={sort.label} onItemClick={() => setSort(sort.value)}>
          {sort.label}
        </DropDownItem>
      ))}
    </DropDown>
  );
};

export default SortingSelector;
