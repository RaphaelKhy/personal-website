import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme} from "./components/Themes";
import Header from "./components/Header";
import Body from "./components/Body";
import GlobalStyle from "./components/styles/Global";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const handleToggle = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header handleToggle={handleToggle} />
      <Body />
    </ThemeProvider>
  );
}

export default App;
