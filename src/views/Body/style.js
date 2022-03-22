import styled, { css } from "styled-components";

export const StyledBody = styled.div`
  ${(props) => displayBorders(props.theme, "black")}
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
`;

function displayBorders(theme, color) {
  if (theme.showBorders) {
    return css`
      outline-style: solid;
      outline-color: ${color ? color : "burlywood"};
    `;
  }
}
