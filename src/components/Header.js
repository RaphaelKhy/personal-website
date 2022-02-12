import Logo from "./Logo";
import Menu from "./Menu";
import { StyledHeader } from "./styles/Header.styled";

export default function Header(props) {
  return (
    <StyledHeader isTransition={props.isTransition}>
      <div id="container">
        <Logo isTransition={props.isTransition}></Logo>
        <Menu
          handleToggle={props.handleToggle}
          isTransition={props.isTransition}
        />
      </div>
    </StyledHeader>
  );
}
