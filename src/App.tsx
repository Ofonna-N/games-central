import { useState } from "react";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import setTheme from "./utility/setTheme";
import { Genre } from "./hooks/app/useGenres";
import PlatformsFilter from "./components/PlatformsFilter";
import { Platform } from "./hooks/app/useGames";
import SortingSelector from "./components/SortingSelector";
import GameHeading from "./components/GameHeading";

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
  sort: string;
  searchText: string;
};

function App() {
  setTheme();
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatfom, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  return (
    <div className="grid lg:grid-cols-side-main">
      <nav className="grid-rows-1 px-[1rem] sm:px-[2rem] lg:col-span-2 shadow-lg mb-4">
        <NavBar
          onSearch={(searchText) => {
            // console.log("search Text", searchText);
            setGameQuery({ ...gameQuery, searchText });
          }}
        />
      </nav>
      <aside className="hidden pl-[1rem] sm:pl-[2rem] col-span-1 lg:block">
        <GenresList
          selectedGenre={gameQuery.genre}
          onGenreSelected={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </aside>
      <main className="col-span-1 px-[1rem] sm:px-[2rem]">
        <GameHeading gameQuery={gameQuery} />
        <div className="flex gap-[2rem]">
          <PlatformsFilter
            selectedPlatform={gameQuery.platform}
            setSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortingSelector
            selectedSort={gameQuery.sort}
            onSortClicked={(sort) => setGameQuery({ ...gameQuery, sort })}
          />
        </div>
        <GamesGrid gameQuery={gameQuery} />
      </main>
    </div>
  );
}

export default App;
