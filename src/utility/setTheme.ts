const darkValue = "dark";
export default function () {
  if (!("theme" in localStorage)) localStorage.setItem("theme", darkValue);

  if (
    localStorage.theme === darkValue ||
    (!("theme" in localStorage) &&
      window.matchMedia(`(prefers-color-scheme: ${darkValue})`).matches)
  ) {
    document.documentElement.classList.add(darkValue);
  } else {
    document.documentElement.classList.remove(darkValue);
  }
}
