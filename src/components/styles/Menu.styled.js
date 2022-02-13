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
    background: linear-gradient(currentColor 0 0) bottom / var(--d, 0) 2px
      no-repeat;
    :hover {
      color: ${(props) => props.theme.colors.highContrastText};
      --d: 100%;
      transition: 0.5s;
    }
  }

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
      height: 20px;
      width: 20px;
    }
  }
`;
