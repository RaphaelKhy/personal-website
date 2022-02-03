import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledHeader = styled.header`
  ${(props) => displayBorders(props.theme)}
  display: flex;
  flex-direction: row;
  justify-content: end;
  border-bottom: 1px solid ${(props) => props.theme.colors.elementBorder};
  padding: 0px 25px 0px 25px;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.AppBg};
`;
