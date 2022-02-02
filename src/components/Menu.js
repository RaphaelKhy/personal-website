import { StyledMenu } from "./styles/Menu.styled";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "styled-components";
import { lightTheme } from "./Themes";
import file from "../static/Resume.pdf";

export default function Menu(props) {
  
  const HandleClick = (e) => {
    e.preventDefault();
    var target = e.target.getAttribute("href").substring(2);
    const location = document.getElementById(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 65,
    })
  };

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
      <a href="/#about" onClick={HandleClick}>About</a>
      <a href="/#experience" onClick={HandleClick}>Experience</a>
      <a href="/#projects" onClick={HandleClick}>Projects</a>
      <a href="/#contact" onClick={HandleClick}>Contact</a>
      <a href={file} target="blank">
        Resume
      </a>
      <button onClick={props.handleToggle}>{icon(curTheme)}</button>
    </StyledMenu>
  );
}
