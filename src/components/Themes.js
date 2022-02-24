export const globalTheme = {
  borders: false,
  transitionTime: "0.5s",
  menuTime: "0.4s",
};

export const darkTheme = {
  showBorders: globalTheme.borders,
  transitionTime: globalTheme.transitionTime,
  menuTime: globalTheme.menuTime,
  colors: {
    AppBg: "#252525",
    headerBg: "#181818",
    elementBg: "#18181885",
    hoveredElementBg: "#272727",
    elementBorder: "#444",
    hoveredElementBorder: "#444",
    darkFont: "#a0a6b0",
    brightFont: "#eee",
    buttonHover: "#272727",
    link: "#fdb54a",
    Title: "#fdb54a",
    ThemeButton: "#fdb54a",
  },
};

export const lightTheme = {
  showBorders: globalTheme.borders,
  transitionTime: globalTheme.transitionTime,
  menuTime: globalTheme.menuTime,
  colors: {
    AppBg: "#FFFFFF",
    headerBg: "#f0f0f0",
    elementBg: "#f0f0f0",
    hoveredElementBg: "#f0f0f0",
    elementBorder: "#e0e0e0",
    hoveredElementBorder: "#444",
    darkFont: "#6c6c6c",
    brightFont: "#222",
    buttonHover: "#ddd",
    link: "#6b76f3",
    Title: "#222",
    ThemeButton: "#6b76f3",
  },
};
