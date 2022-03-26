import { StyledThemeButton } from "../style";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "styled-components";
import { lightTheme } from "../../../components/styles/Themes";
import React from "react";
import ToolTip from "../../../components/ToolTip";

export const ThemeButton = (props) => {
  const theme = useTheme();

  return (
    <ToolTip
      text={theme === lightTheme ? "Activate dark mode" : "Activate light mode"}
      delay="0"
      content={
        <StyledThemeButton isTransition={props.isTransition}>
          <button id="button" onClick={props.handleToggle}>
            {theme === lightTheme ? (
              <MdOutlineDarkMode id="svg" />
            ) : (
              <MdOutlineLightMode id="svg" />
            )}
          </button>
        </StyledThemeButton>
      }
    />
  );
};
