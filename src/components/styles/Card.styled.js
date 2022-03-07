import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledCard = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.elementBg};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.elementBorder};
  border-radius: 16px;
  max-width: 890px;
  width: -webkit-fill-available;
  width: -moz-available; 
  ${(props) => displayBorders(props.theme, "yellow")}
  align-self: center;

  transition: border-color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
    background-color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

`;
