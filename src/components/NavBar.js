import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFileText,
  AiOutlineMail,
} from "react-icons/ai";
import { StyledNavBar } from "./styles/NavBar.styled";

export default function NavBar() {
  return (
    <StyledNavBar>
      <a href="https://github.com/RaphaelKhy">
        <AiFillGithub size={50} />
      </a>
      <a href="https://www.linkedin.com/in/raphael-khaykin-23465718a/">
        <AiFillLinkedin size={50} />
      </a>
      <a href="">
        <AiFillFileText size={50} />
      </a>
      <a href="mailto:raphaelkhaykin@gmail.com">
        <AiOutlineMail size={50} />
      </a>
    </StyledNavBar>
  );
}
