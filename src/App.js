import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Themes";
import Header from "./components/Header";
import Body from "./components/Body";
import GlobalStyle from "./components/styles/Global";
import React, { useEffect } from "react";

function App() {
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
    }, 5000);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isTransition={isTransition} />
      <Header handleToggle={handleToggle} isTransition={isTransition} />
      <Body isTransition={isTransition} />
    </ThemeProvider>
  );
}

export default App;
