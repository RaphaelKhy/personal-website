import Menu from "./Menu";
import { StyledHeader } from "./styles/Header.styled";

export default function Header(props) {
  return (
    <StyledHeader>
      <Menu handleToggle={props.handleToggle} />
    </StyledHeader>
  );
}
