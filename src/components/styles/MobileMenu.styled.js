import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledMobileMenu = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;
  height: 65px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: unset;
    background-color: unset;
    border-radius: 0.5rem;
    height: 50px;
    width: 50px;
    color: ${(props) => props.theme.colors.highContrastText};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    :hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.hoveredElementBg};
      transition: background-color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    }
    #svg {
      height: 1rem;
      width: 1rem;
    }
  }

  .hamburger {
    position: relative;
    display: block;
    cursor: pointer;

    appearance: none;
    background: none;
    outline: none;
    border: none;
  }

  .hamburger .bar,
  .hamburger:after,
  .hamburger:before {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${(props) => props.theme.colors.highContrastText};
    margin: 8px 0px;
    transition: 0.4s;
    
  }

  .hamburger.is-active:before {
    transform: rotate(-45deg) translate(-9px, 8px);
  }

  .hamburger.is-active:after {
    transform: rotate(45deg) translate(-9px, -8px);
  }

  .hamburger.is-active .bar {
    opacity: 0;
  }

  .mobile-nav {
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    margin-top: 66px;
    min-height: 100vh;
    display: block;
    background-color: ${(props) => props.theme.colors.AppBg};
    padding-top: 120px;
    transition: 0.5s;
  }

  .mobile-nav.is-active {
    left: 0;
  }

  .mobile-nav a {
    display: block;
    width: 100%;
    max-width: 200px;
    margin: 0 auto 16px;
    text-align: center;
    padding: 12px 16px;
    color: ${(props) => props.theme.colors.highContrastText};
    text-decoration: none;
  }

  .mobile-nav a:hover {
    background-color: ${(props) => props.theme.colors.hoveredElementBg};
  }
`;
