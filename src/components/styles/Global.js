import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    scroll-behavior: smooth;
}
body{
    background-color: ${(props) => props.theme.colors.AppBg};
    font-family:  system-ui, sans-serif;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;

    & ::selection {
    background-color: ${(props) => props.theme.colors.select};
    }
}
`;

function displayBorders(theme, color) {
  if (theme.showBorders) {
    return css`
      outline-style: solid;
      outline-color: ${color ? color : "burlywood"};
    `;
  }
}

export default GlobalStyle;
export { displayBorders };
