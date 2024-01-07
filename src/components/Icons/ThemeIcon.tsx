import { DARK_THEME, LIGHT_THEME, THEME } from "../../util/const";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

const ThemeIcon = () => {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  useEffect(() => {
    const themeFromStorage = window.localStorage.getItem(THEME);
    setCurrentTheme(themeFromStorage);
  }, []);

  const handleThemeChange = () => {
    if (currentTheme === LIGHT_THEME) {
      setCurrentTheme(DARK_THEME);
      document.documentElement.setAttribute("data-theme", DARK_THEME);
    } else {
      setCurrentTheme(LIGHT_THEME);
      document.documentElement.setAttribute("data-theme", LIGHT_THEME);
    }
  };

  return (
    <>
      <button
        id="theme-toggle"
        className="theme-toggle"
        data-toggle-theme="dark, light"
        data-act-class="ACTIVECLASS"
        aria-label="auto"
        aria-live="polite"
        onClick={() => handleThemeChange()}
      >
        {currentTheme === DARK_THEME ? (
          <FaSun size="24" className="top-navigation-icon flex mx-5 my-auto" />
        ) : (
          <FaMoon size="24" className="top-navigation-icon flex mx-5 my-auto" />
        )}
      </button>
    </>
  );
};

export default ThemeIcon;
