import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledMobileMenu = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;

  .hamburger-react {
    color: ${(props) => props.theme.colors.brightFont};
  }

  .mobile-nav {
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    margin-top: 61px;
    min-height: 100vh;
    display: block;
    background-color: ${(props) => props.theme.colors.AppBg};
    color: ${(props) => props.theme.colors.brightFont};
    padding-top: 120px;
    transition: all 0.3s,
      background-color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
      color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
  }

  .mobile-nav.is-active {
    left: 0;
  }

  .mobile-nav a {
    font-size: larger;
    display: block;
    width: 100%;
    max-width: 200px;
    margin: 0 auto 16px;
    text-align: center;
    padding: 12px 16px;
    color: ${(props) => props.theme.colors.brightFont};
    text-decoration: none;
  }

  .mobile-nav a:hover {
    background-color: ${(props) => props.theme.colors.hoveredElementBg};
  }
`;
