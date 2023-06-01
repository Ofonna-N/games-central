import { useState } from "react";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import setTheme from "./utility/setTheme";
import { Genre } from "./hooks/app/useGenres";
import PlatformsFilter from "./components/PlatformsFilter";
import { Platform } from "./hooks/app/useGames";

function App() {
  setTheme();

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatfom, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <div className="grid px-[2rem] lg:grid-cols-side-main">
      <nav className="grid-rows-1 lg:col-span-2">
        <NavBar />
      </nav>
      <aside className="hidden col-span-1 lg:block">
        <GenresList
          selectedGenre={selectedGenre}
          onGenreSelected={(genre) => setSelectedGenre(genre)}
        />
      </aside>
      <main className="col-span-1">
        <PlatformsFilter
          selectedPlatform={selectedPlatfom}
          setSelectedPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GamesGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatfom}
        />
      </main>
    </div>
  );
}

export default App;
