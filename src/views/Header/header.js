import { useEffect, useState } from "react";
import Logo from "./logo";
import Menu from "./menu";
import MobileMenu from "./mobileMenu";
import { StyledHeader } from "./style";

export default function Header({ handleToggle, isTransition }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

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
          handleToggle={handleToggle}
          isTransition={isTransition}
          isMobileMenuActive={isMobileMenuActive}
          setIsMobileMenuActive={setIsMobileMenuActive}
        />
      );
    } else {
      return <Menu handleToggle={handleToggle} isTransition={isTransition} />;
    }
  }

  return (
    <StyledHeader isTransition={isTransition} id="header">
      <div id="container">
        <Logo
          isTransition={isTransition}
          setIsMobileMenuActive={setIsMobileMenuActive}
        />
        {getMenu()}
      </div>
    </StyledHeader>
  );
}
