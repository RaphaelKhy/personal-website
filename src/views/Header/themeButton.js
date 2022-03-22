import { StyledThemeButton } from "./style";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "styled-components";
import { lightTheme } from "../../components/styles/Themes";
import React from "react";
import ToolTip from "../../components/ToolTip";

export const ThemeButton = (props) => {
  const theme = useTheme();
  const icon = (theme) => {
    if (theme === lightTheme) {
      return <MdOutlineDarkMode id="svg" />;
    } else {
      return <MdOutlineLightMode id="svg" />;
    }
  };

  return (
    <ToolTip
      text={theme === lightTheme ? "Activate dark mode" : "Activate light mode"}
      delay="0"
      content={
        <StyledThemeButton isTransition={props.isTransition}>
          <button id="button" onClick={props.handleToggle}>
            {icon(useTheme())}
          </button>
        </StyledThemeButton>
      }
    />
  );
};
