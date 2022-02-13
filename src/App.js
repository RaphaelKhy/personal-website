import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Themes";
import Header from "./components/Header";
import Body from "./components/Body";
import GlobalStyle from "./components/styles/Global";

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const [isTransition, setIsTransition] = useState(false);
  const handleToggle = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    setIsTransition(true);
    setTimeout(() => {
      setIsTransition(false);
    }, 5000);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isTransition={isTransition}/>
      <Header handleToggle={handleToggle} isTransition={isTransition}/>
      <Body isTransition={isTransition}/>
    </ThemeProvider>
  );
}

export default App;
