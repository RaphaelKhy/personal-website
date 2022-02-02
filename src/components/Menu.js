import { StyledMenu } from "./styles/Menu.styled";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "styled-components";
import { lightTheme } from "./Themes";
import file from "../static/Resume.pdf";

export default function Menu(props) {
  const curTheme = useTheme();
  const icon = (theme) => {
    if (theme === lightTheme) {
      return <MdOutlineLightMode id="svg" />;
    } else {
      return <MdOutlineDarkMode id="svg" />;
    }
  };

  return (
    <StyledMenu>
      <a href="/#about">About</a>
      <a href="/#experience">Experience</a>
      <a href="/#projects">Projects</a>
      <a href="/#contact">Contact</a>
      <a href={file} target="blank">Resume</a>
      <button onClick={props.handleToggle}>{icon(curTheme)}</button>
    </StyledMenu>
  );
}
