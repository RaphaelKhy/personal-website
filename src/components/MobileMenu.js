import resume from "../static/resume.pdf";
import { StyledMobileMenu } from "./styles/MobileMenu.styled";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import {ThemeButton} from "./ThemeButton";
import { HandleClick } from "./Menu";

export default function MobileMenu(props) {
  const [isActive, setActive] = useState(false);

  const onClick = (e) => {
    props.setIsMobileMenuActive(false);
    HandleClick(e);
  };

  return (
    <StyledMobileMenu isTransition={props.isTransition}>
      <ThemeButton
        handleToggle={props.handleToggle}
        isTransition={props.isTransition}
      ></ThemeButton>
      <Hamburger
        duration={"0.3"}
        direction={"left"}
        toggled={props.isMobileMenuActive}
        toggle={props.setIsMobileMenuActive}
      />
      <nav className={"mobile-nav " + (props.isMobileMenuActive ? "is-active" : null)}>
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
