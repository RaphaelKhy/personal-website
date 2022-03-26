import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/styles/Themes";
import { Header } from "./views/Header";
import { Body } from "./views/Body";
import { GlobalStyle } from "./components/styles/Global";
import { useState, createContext, useEffect } from "react";

export const themeTransitionContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    if ("theme" in localStorage) {
      let theme = localStorage.getItem("theme");
      if (theme === "light") {
        setTheme(lightTheme);
      } else {
        setTheme(darkTheme);
      }
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  const handleToggle = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    setIsTransition(true);
    localStorage.setItem("theme", theme === lightTheme ? "dark" : "light");
    setTimeout(() => {
      setIsTransition(false);
    }, 500);
  };

  return (
    <ThemeProvider theme={theme}>
      <themeTransitionContext.Provider value={isTransition}>
        <GlobalStyle isTransition={isTransition} />
        <Header handleToggle={handleToggle} />
        <Body />
      </themeTransitionContext.Provider>
    </ThemeProvider>
  );
};

export default App;
