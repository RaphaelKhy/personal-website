export const globalTheme = {
  borders: false,
  transitionTime: "0.4s",
  menuTime: "0.4s",
};

export const darkTheme = {
  showBorders: globalTheme.borders,
  transitionTime: globalTheme.transitionTime,
  menuTime: globalTheme.menuTime,
  colors: {
    AppBg: "#030303",
    headerBg: "#1a1a1b",
    elementBg: "#1a1a1b",
    elementBorder: "#343536",
    darkFont: "#d5dde1",
    brightFont: "#ffffff",
    buttonHover: "#272727",
    link: "#868dff",
    Title: "#fdb54a",
    ThemeButton: "#868dff",
  },
};

export const lightTheme = {
  showBorders: globalTheme.borders,
  transitionTime: globalTheme.transitionTime,
  menuTime: globalTheme.menuTime,
  colors: {
    AppBg: "#f6f8fa",
    headerBg: "#ffffff",
    elementBg: "#ffffff",
    elementBorder: "#ccc",
    darkFont: "#525557",
    brightFont: "#222222",
    buttonHover: "#ddd",
    link: "#6b76f3",
    Title: "#222",
    ThemeButton: "#6b76f3",
  },
};
