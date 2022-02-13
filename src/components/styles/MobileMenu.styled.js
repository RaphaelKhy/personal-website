import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledMobileMenu = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;
  height: 65px;

  .hamburger-react {
    color: ${(props) => props.theme.colors.highContrastText};
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
