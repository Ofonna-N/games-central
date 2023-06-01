type Props = {
  onItemClick?: () => void;
  children: React.ReactNode;
};

const DropDownItem = ({ onItemClick, children }: Props) => {
  return (
    <li>
      <button
        className="p-[1rem] w-full text-left hover:bg-gray-400 dark:hover:bg-dark-primary"
        onClick={onItemClick}
      >
        {children}
      </button>
    </li>
  );
};

export default DropDownItem;
