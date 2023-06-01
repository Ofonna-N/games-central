import { useState } from "react";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import setTheme from "./utility/setTheme";
import { Genre } from "./hooks/app/useGenres";
import PlatformsFilter from "./components/PlatformsFilter";
import { Platform } from "./hooks/app/useGames";
import SortingSelector from "./components/SortingSelector";

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
  sort: string;
};

function App() {
  setTheme();
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatfom, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  return (
    <div className="grid px-[2rem] lg:grid-cols-side-main">
      <nav className="grid-rows-1 lg:col-span-2">
        <NavBar />
      </nav>
      <aside className="hidden col-span-1 lg:block">
        <GenresList
          selectedGenre={gameQuery.genre}
          onGenreSelected={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </aside>
      <main className="col-span-1">
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
