import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledMenu = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;
  height: 65px;

  a {
    color: ${(props) => props.theme.colors.highContrastText};
    text-decoration: none;
    padding-top: 5px;
    padding-bottom: 5px;
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
  }

  a {
    display: block;
    position: relative;
    padding: 0.2em 0;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: ${(props) => props.theme.colors.link};
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  a {
    overflow: hidden;
  }

  a::after {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }

  a:hover::after,
  a:focus::after {
    transform: translate3d(0, 0, 0);
  }
`;
