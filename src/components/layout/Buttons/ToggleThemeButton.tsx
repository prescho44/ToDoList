import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
const ToggleThemeButton = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "">("");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme === "dark" ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="rounded-xl bg-yellow-200 lg:flex lg:gap-x-10 dark:bg-gray-700">
      <button
        onClick={toggleTheme}
        className="rounded-md p-2.5 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      >
        <span className="sr-only">Toggle theme</span>
        {theme === "dark" ? (
          <MoonIcon className="size-5 text-zinc-300" />
        ) : (
          <SunIcon className="size-5 text-yellow-400" />
        )}
      </button>
    </div>
  );
};

export default ToggleThemeButton;
