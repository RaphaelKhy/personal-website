import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    scroll-behavior: smooth;
}
body{
    background-color: ${(props) => props.theme.colors.AppBg};
    font-family: Sans-Serif;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 0px;

    & ::selection {
    background-color: ${(props) => props.theme.colors.select};
    }
}
`;

export default GlobalStyle;
