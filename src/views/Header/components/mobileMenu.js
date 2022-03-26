import React, { useContext } from "react";
import { ThemeButton } from "./themeButton";
import { HandleClick } from "./menu";
import { StyledMobileMenu } from "../style";
import { Squash as Hamburger } from "hamburger-react";
import resume from "../../../static/Resume.pdf";
import { themeTransitionContext } from "../../../App";

export default function MobileMenu(props) {
  const { handleToggle, isMobileMenuActive, setIsMobileMenuActive } = props;
  const isTransition = useContext(themeTransitionContext);

  const onClick = (e) => {
    setIsMobileMenuActive(false);
    HandleClick(e);
  };

  return (
    <StyledMobileMenu isTransition={isTransition}>
      <ThemeButton handleToggle={handleToggle} isTransition={isTransition} />
      <Hamburger
        id="hamburger"
        duration={"0.3"}
        direction={"left"}
        toggled={isMobileMenuActive}
        toggle={setIsMobileMenuActive}
      />
      <nav
        className={"mobile-nav " + (isMobileMenuActive ? "is-active" : null)}
      >
        <a href="/#experience" onClick={onClick}>
          Experience
        </a>
        <a href="/#projects" onClick={onClick}>
          Projects
        </a>
        <a href="/#contact" onClick={onClick}>
          Contact
        </a>
        <a href={resume} target="blank">
          Resume
        </a>
      </nav>
    </StyledMobileMenu>
  );
}
