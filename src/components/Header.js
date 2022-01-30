import Menu from "./Menu";
import NavBar from "./NavBar";
import { StyledHeader } from "./styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      {/* <NavBar /> */}
      <Menu />
    </StyledHeader>
  );
}
