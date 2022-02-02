import styled, { css } from "styled-components";

export const StyledContactMe = styled.div`
  ${(props) => displayBorders(props.theme)}
  color: ${(props) => props.theme.colors.highContrastText};
  .title {
    display: flex;
    justify-content: center;
  }
`;

function displayBorders(theme) {
  if (theme.showBorders) {
    return css`
      outline-style: solid;
      outline-color: burlywood;
    `;
  }
}
