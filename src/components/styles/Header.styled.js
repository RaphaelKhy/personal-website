import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  ${(props) => displayBorders(props.theme)}
  display: flex;
  flex-direction: row;
  justify-content: end;
  border-bottom: 1px solid ${(props) => props.theme.colors.elementBorder};
  padding: 0px 25px 0px 25px;
`;

function displayBorders(theme, color) {
  if (theme.showBorders) {
    return css`
      outline-style: solid;
      outline-color: ${color ? color : "burlywood"};
    `;
  }
}
