import { createGlobalStyle, css } from 'styled-components'

import { lightTheme } from './Themes'

export const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: clip;
  }

  html {
    scroll-behavior: smooth;
    color-scheme: ${(props) => (props.theme === lightTheme ? 'light' : 'dark')};
  }

  body {
    background-color: ${(props) => props.theme.colors.appBackground};
    font-family: 'Inter', serif;
    margin: 0;
    transition: background-color ${(props) =>
      props.isTransition ? props.theme.transitionTime : '0s'};

    & ::selection {
      color: ${(props) => props.theme.colors.appBackground};
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

/**
 * Converts a hex color to rgba
 * @param {string} hex - a string containing a hex color
 * @param {number} opacity - the opacity of the color between 0 and 1
 * @returns css
 */
export const hexToRgba = (hex, opacity) => {
  var c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')'
  }
}
