import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
body{
  background-color: ${(props) => props.theme.colors.AppBg};
  font-family: 'IBM Plex Serif', serif;
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  transition: background-color ${(props) =>
    props.isTransition ? props.theme.transitionTime : "0s"};

  & ::selection {
    color: ${(props) => props.theme.colors.AppBg};
    background-color: ${(props) => props.theme.colors.link};

  } 
}
`;

export function displayBorders(theme, color) {
  if (theme.showBorders) {
    return css`
      outline-style: solid;
      outline-color: ${color ? color : "burlywood"};
    `;
  }
}

export default GlobalStyle;
