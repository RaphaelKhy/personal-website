export const globalTheme = {
  // borders is used to visualize components during debugging
  borders: false,
  transitionTime: '0.3s',
  menuTime: '0.4s'
}

export const darkTheme = {
  showBorders: globalTheme.borders,
  transitionTime: globalTheme.transitionTime,
  menuTime: globalTheme.menuTime,
  colors: {
    appBackground: '#030303',
    headerBg: '#1a1a1b',
    elementBg: '#1a1a1b',
    elementBorder: '#343536',
    fontDark: '#d5dde1',
    fontLight: '#ffffff',
    buttonHover: '#272727',
    link: '#868dff'
  }
}

export const lightTheme = {
  showBorders: globalTheme.borders,
  transitionTime: globalTheme.transitionTime,
  menuTime: globalTheme.menuTime,
  colors: {
    appBackground: '#f9fafb',
    headerBg: '#ffffff',
    elementBg: '#ffffff',
    elementBorder: '#ccc',
    fontDark: '#525557',
    fontLight: '#222222',
    buttonHover: '#ddd',
    link: '#6b76f3'
  }
}
