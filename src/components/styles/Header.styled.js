import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  ${(props) => displayBorders(props.theme)}
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 0.3rem;
  margin-bottom: 0.5rem;
`;

function displayBorders(theme, color) {
  if (theme.showBorders) {
    return css`
      outline-style: solid;
      outline-color: ${color ? color : "burlywood"};
    `;
  }
}
