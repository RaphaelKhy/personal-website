import { StyledThemeButton } from "./styles/ThemeButton.styled";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "styled-components";
import { lightTheme } from "./Themes";

export default function ThemeButton(props) {
  const icon = (theme) => {
    if (theme === lightTheme) {
      return <MdOutlineDarkMode id="svg" />;
    } else {
      return <MdOutlineLightMode id="svg" />;
    }
  };

  return (
    <StyledThemeButton isTransition={props.isTransition}>
      <button id="button" onClick={props.handleToggle}>
        {icon(useTheme())}
      </button>
    </StyledThemeButton>
  );
}
