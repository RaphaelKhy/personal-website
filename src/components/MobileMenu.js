import resume from "../static/Resume.pdf";
import { StyledMobileMenu } from "./styles/MobileMenu.styled";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import ThemeButton from "./ThemeButton";

export default function MobileMenu(props) {
  const [isActive, setActive] = useState(false);

  const HandleClick = (e) => {
    setActive(false);
    e.preventDefault();
    var target = e.target.getAttribute("href").substring(2);
    const location = document.getElementById(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 65,
    });
  };

  return (
    <StyledMobileMenu isTransition={props.isTransition}>
      <ThemeButton
        handleToggle={props.handleToggle}
        isTransition={props.isTransition}
      ></ThemeButton>
      <Hamburger
        duration={"0.5"}
        direction={"left"}
        toggled={isActive}
        toggle={setActive}
      />
      <nav className={"mobile-nav " + (isActive ? "is-active" : null)}>
        <a href="/#experience" onClick={HandleClick}>
          Experience
        </a>
        <a href="/#education" onClick={HandleClick}>
          Education
        </a>
        <a href="/#projects" onClick={HandleClick}>
          Projects
        </a>
        <a href="/#contact" onClick={HandleClick}>
          Contact
        </a>
        <a href={resume} target="blank">
          Resume
        </a>
      </nav>
    </StyledMobileMenu>
  );
}
