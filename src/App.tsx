import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import setTheme from "./utility/setTheme";

import PlatformsFilter from "./components/PlatformsFilter";

import SortingSelector from "./components/SortingSelector";
import GameHeading from "./components/GameHeading";

function App() {
  setTheme();

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatfom, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  return (
    <div className="grid lg:grid-cols-side-main">
      <nav className="grid-rows-1 px-[1rem] sm:px-[2rem] lg:col-span-2 shadow-lg mb-4">
        <NavBar />
      </nav>
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
}

export default App;
