import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
  overflow-x: clip;
}

body{
  background-color: ${(props) => props.theme.colors.AppBg};
  font-family: 'Inter', serif;
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  transition: background-color ${(props) =>
    props.isTransition ? props.theme.transitionTime : "0s"};
  overflow-x: clip;

  & ::selection {
    color: ${(props) => props.theme.colors.AppBg};
    background-color: ${(props) => props.theme.colors.link};

  } 
}
`;

export default GlobalStyle;
