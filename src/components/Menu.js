import { StyledMenu } from "./styles/Menu.styled";
import { MdOutlineLightMode } from "react-icons/md";

export default function Menu(props) {
  return (
    <StyledMenu>
      <a href="/#about">About</a>
      <a href="/#experience">Experience</a>
      <a href="/#projects">Projects</a>
      <a href="/#contact">Contact</a>
      <a href="/Content/Resume.pdf">Resume</a>
      <button onClick={props.handleToggle}>
        <MdOutlineLightMode id="svg" />
      </button>
    </StyledMenu>
  );
}
