import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledHeader = styled.header`
  ${(props) => displayBorders(props.theme)}
  flex-direction: row;
  border-bottom: 1px solid ${(props) => props.theme.colors.elementBorder};
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.AppBg};

  transition: background-color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
    border-color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};


  #container {
    display: flex;
    justify-content: space-between;
    padding: 0px 25px 0px 25px;
    max-width: 80rem;
    margin: auto;
  }
`;