import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledLogo = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.brightFont};
  text-decoration: none;
  transition: color
    ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

  #logo {
    display: inline-block;
    font-weight: 500;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.brightFont};
    text-decoration: none;
    padding-top: 0.1em;
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
  }

  #logo:after {
    content: "";
    width: 0px;
    height: 0.1em;
    display: block;
    background: ${(props) => props.theme.colors.link};
    transition: 300ms;
  }

  #logo:hover:after {
    width: 100%;
  }
`;
