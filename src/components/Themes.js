import {
  grayDark,
  gray,
  blue,
  blueDark,
  sky,
  slateDark,
} from "@radix-ui/colors";

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
  menuTime: globalTheme.menuTime,
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

// export const darkTheme = {
//   showBorders: globalTheme.borders,
//   transitionTime: globalTheme.transitionTime,
//   menuTime: globalTheme.menuTime,
//   colors: {
//     ...grayDark,
//     ...blueDark,
//     ...sky,
//     ...slateDark,

//     AppBg: slateDark.slate1,
//     elementBg: slateDark.slate4,
//     hoveredElementBg: slateDark.slate4,
//     elementBorder: slateDark.slate7,
//     hoveredElementBorder: slateDark.slate8,
//     solidBg: slateDark.slate8,
//     lowContrastText: sky.sky3,
//     highContrastText: sky.sky3,
//   },
// };
