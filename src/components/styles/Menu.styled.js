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
    color: ${(props) => props.theme.colors.lowContrastText};
    text-decoration: none;
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    :hover {
      color: ${(props) => props.theme.colors.highContrastText};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: unset;
    background-color: unset;
    border-radius: 4px;
    height: 40px;
    width: 40px;
    color: ${(props) => props.theme.colors.highContrastText};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    :hover {
      background-color: ${(props) => props.theme.colors.hoveredElementBg};
      transition: background-color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    }
    #svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;
