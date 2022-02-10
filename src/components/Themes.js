import { grayDark, gray, blue, blueDark } from "@radix-ui/colors";

const globalTheme = {
  borders: false,
  transitionTime: "0.5s",
};

export const darkTheme = {
  showBorders: globalTheme.borders,
  transitionTime: globalTheme.transitionTime,
  colors: {
    ...grayDark,
    ...blueDark,

    AppBg: grayDark.gray1,
    elementBg: grayDark.gray3,
    hoveredElementBg: grayDark.gray4,
    elementBorder: grayDark.gray7,
    hoveredElementBorder: grayDark.gray8,
    solidBg: grayDark.gray8,
    lowContrastText: grayDark.gray11,
    highContrastText: grayDark.gray12,
    select: blueDark.blue6,
  },
};

export const lightTheme = {
  showBorders: globalTheme.borders,
  transitionTime: globalTheme.transitionTime,
  colors: {
    ...gray,
    ...blue,

    AppBg: gray.gray1,
    elementBg: gray.gray3,
    hoveredElementBg: gray.gray4,
    elementBorder: gray.gray7,
    hoveredElementBorder: gray.gray8,
    solidBg: gray.gray8,
    lowContrastText: gray.gray11,
    highContrastText: gray.gray12,
    select: blue.blue6,
  },
};
