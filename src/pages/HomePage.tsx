import GameHeading from "../components/GameHeading";
import GamesGrid from "../components/GamesGrid";
import GenresList from "../components/GenresList";
import PlatformsFilter from "../components/PlatformsFilter";
import SortingSelector from "../components/SortingSelector";

const HomePage = () => {
  return (
    <div className="grid lg:grid-cols-side-main">
      <aside className="hidden pl-[1rem] sm:pl-[2rem] col-span-1 lg:block">
        <GenresList />
      </aside>
      <main className="col-span-1 px-[1rem] sm:px-[2rem]">
        <GameHeading />
        <div className="flex gap-[2rem]">
          <PlatformsFilter />
          <SortingSelector />
        </div>
        <GamesGrid />
      </main>
    </div>
  );
};

export default HomePage;
