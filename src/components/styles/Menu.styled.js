import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledMenu = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;

  a {
    display: inline-block;
    color: ${(props) => props.theme.colors.brightFont};
    text-decoration: none;
    padding-top: 0.1em;
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
  }

  a:after {
    content: "";
    width: 0px;
    height: 0.1em;
    display: block;
    background: ${(props) => props.theme.colors.link};
    transition: 300ms;
  }

  a:hover:after {
    width: 100%;
  }
`;
