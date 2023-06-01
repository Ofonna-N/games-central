import DropDown from "./utility/dropDown/DropDown";
import DropDownItem from "./utility/dropDown/DropDownItem";

const SortingSelector = () => {
  return (
    <DropDown title="Order by">
      <DropDownItem>Relevance</DropDownItem>
      <DropDownItem>Date Added</DropDownItem>
      <DropDownItem>Name</DropDownItem>
      <DropDownItem>Release Date</DropDownItem>
      <DropDownItem>Popularity</DropDownItem>
      <DropDownItem>Average Rating</DropDownItem>
    </DropDown>
  );
};

export default SortingSelector;
