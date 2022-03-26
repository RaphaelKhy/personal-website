import { useEffect, useState, useContext } from "react";
import Logo from "./logo";
import Menu from "./menu";
import MobileMenu from "./mobileMenu";
import { StyledHeader } from "../style";
import { themeTransitionContext } from "../../../App";

export default function Header({ handleToggle }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const isTransition = useContext(themeTransitionContext);

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

  return (
    <StyledHeader isTransition={isTransition} id="header">
      <div id="container">
        <Logo
          isTransition={isTransition}
          setIsMobileMenuActive={setIsMobileMenuActive}
        />
        {isMobile ? (
          <MobileMenu
            handleToggle={handleToggle}
            isMobileMenuActive={isMobileMenuActive}
            setIsMobileMenuActive={setIsMobileMenuActive}
          />
        ) : (
          <Menu handleToggle={handleToggle} />
        )}
      </div>
    </StyledHeader>
  );
}
