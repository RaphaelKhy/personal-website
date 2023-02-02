import { createGlobalStyle } from 'styled-components'
import { css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
  overflow-x: clip;
}

body{
  background-color: ${(props) => props.theme.colors.AppBg};
  font-family: 'Inter', serif;
  margin: 0 0 0 0;
  transition: background-color ${(props) =>
      props.isTransition ? props.theme.transitionTime : '0s'};
  overflow-x: clip;

  & ::selection {
    color: ${(props) => props.theme.colors.AppBg};
    background-color: ${(props) => props.theme.colors.link};

  } 
}
`

export const DebugBorder = (theme, color) => {
    if (theme.showBorders) {
        return css`
            outline-style: solid;
            outline-color: ${color ? color : 'burlywood'};
        `
    }
}
