import { StyledMenu } from "./styles/Menu.styled";

export default function HeaderMenu() {
  return (
    <StyledMenu>
      <a href="/#about">About</a>
      <a href="/#experience">Experience</a>
      <a href="/#projects">Projects</a>
      <a href="/#contact">Contact</a>
      <a href="">Resume</a>
    </StyledMenu>
  );
}
