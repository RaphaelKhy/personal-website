import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "styled-components";
import { lightTheme } from "./Themes";
import resume from "../static/Resume.pdf";
import { StyledMobileMenu } from "./styles/MobileMenu.styled";
import React, { useState } from "react";

export default function MobileMenu(props) {
  const [isActive, setActive] = useState(false);

  const menuToggle = () => {
    setActive(!isActive);
  };

  const icon = (theme) => {
    if (theme === lightTheme) {
      return <MdOutlineDarkMode id="svg" />;
    } else {
      return <MdOutlineLightMode id="svg" />;
    }
  };

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
      <button onClick={props.handleToggle}>{icon(useTheme())}</button>
      <button
        className={"hamburger " + (isActive ? "is-active" : null)}
        onClick={menuToggle}
      >
        <div class="bar"></div>
      </button>{" "}
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
