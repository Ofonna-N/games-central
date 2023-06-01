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

type Props = {
  selectedSort: string;
  onSortClicked: (sort: string) => void;
};
const SortingSelector = ({ selectedSort, onSortClicked }: Props) => {
  const sort = sortOrders.find((value) => value.value === selectedSort);

  return (
    <DropDown title={sort?.label || "Relevance"}>
      {sortOrders.map((sort) => (
        <DropDownItem
          key={sort.label}
          onItemClick={() => onSortClicked(sort.value)}
        >
          {sort.label}
        </DropDownItem>
      ))}
    </DropDown>
  );
};

export default SortingSelector;
