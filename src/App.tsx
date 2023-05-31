import NavBar from "./components/NavBar";

function App() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <nav className=" bg-orange-500 lg:col-span-2">
        <NavBar />
      </nav>
      <aside className=" bg-red-700 hidden lg:block">Aside</aside>
      <main className=" bg-emerald-800">Main</main>
    </div>
  );
}

export default App;
