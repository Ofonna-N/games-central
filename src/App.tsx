import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import setTheme from "./utility/setTheme";

function App() {
  setTheme();

  return (
    <div className="grid px-[2rem] lg:grid-cols-side-main">
      <nav className="grid-rows-1 lg:col-span-2">
        <NavBar />
      </nav>
      <aside className="hidden col-span-1 lg:block">
        <GenresList />
      </aside>
      <main className="col-span-1">
        <GamesGrid />
      </main>
    </div>
  );
}

export default App;
