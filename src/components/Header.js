import { useEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { StyledHeader } from "./styles/Header.styled";

export default function Header(props) {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 800;

  function getMenu() {
    if (isMobile) {
      return (
        <MobileMenu
          handleToggle={props.handleToggle}
          isTransition={props.isTransition}
        />
      );
    } else {
      return (
        <Menu
          handleToggle={props.handleToggle}
          isTransition={props.isTransition}
        />
      );
    }
  }

  return (
    <StyledHeader isTransition={props.isTransition}>
      <div id="container">
        <Logo isTransition={props.isTransition}></Logo>
        {getMenu()}
      </div>
    </StyledHeader>
  );
}
