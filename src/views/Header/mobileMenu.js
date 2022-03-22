import React from "react";
import { ThemeButton } from "./themeButton";
import { HandleClick } from "./menu";
import { StyledMobileMenu } from "./style";
import { Squash as Hamburger } from "hamburger-react";
import resume from "../../static/Resume.pdf";

export default function MobileMenu(props) {
  const onClick = (e) => {
    props.setIsMobileMenuActive(false);
    HandleClick(e);
  };

  return (
    <StyledMobileMenu isTransition={props.isTransition}>
      <ThemeButton
        handleToggle={props.handleToggle}
        isTransition={props.isTransition}
      />
      <Hamburger
        id="hamburger"
        duration={"0.3"}
        direction={"left"}
        toggled={props.isMobileMenuActive}
        toggle={props.setIsMobileMenuActive}
      />
      <nav
        className={
          "mobile-nav " + (props.isMobileMenuActive ? "is-active" : null)
        }
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
