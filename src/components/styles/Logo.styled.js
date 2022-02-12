import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledLogo = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;
  height: 65px;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.lowContrastText};
  text-decoration: none;
  transition: color
    ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
  :hover {
    color: ${(props) => props.theme.colors.highContrastText};
  }
`;
