import Menu from "./Menu";
import { StyledHeader } from "./styles/Header.styled";

export default function Header(props) {
  return (
    <StyledHeader isTransition={props.isTransition}>
      <Menu handleToggle={props.handleToggle} isTransition={props.isTransition}/>
    </StyledHeader>
  );
}
