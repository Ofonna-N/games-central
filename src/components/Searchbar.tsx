import { FaSearch } from "react-icons/fa";
const Searchbar = () => {
  return (
    <form className="flex items-center  flex-grow">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-[1rem] pointer-events-none dark:text-white">
          <FaSearch />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-[3rem] p-2.5  dark:bg-dark-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:focus-within:bg-dark-secondary-bright"
          placeholder="Search games..."
          required
        />
      </div>
    </form>
  );
};

export default Searchbar;
