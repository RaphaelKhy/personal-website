import styled, { css } from "styled-components";

export const StyledBody = styled.div`
  ${(props) => displayBorders(props.theme, "black")}
  padding: 0.3rem;
`;

function displayBorders(theme, color) {
  if (theme.showBorders) {
    return css`
      outline-style: solid;
      outline-color: ${color ? color : "burlywood"};
    `;
  }
}
