import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    font-family: Sans-Serif;
    & ::selection {
    background-color: #b6d8d0;
    }
    a {
    color: black;
    }
    a:hover {
    color: purple;
    }
}
`;

export default GlobalStyle;
