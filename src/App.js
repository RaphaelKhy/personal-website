import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import GlobalStyle from "./components/styles/Global";

const theme = {
  showBorders : false,
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
        <GlobalStyle />
        <Header />
        <Body />
    </ThemeProvider>
  );
}

export default App;
