import styled, { css } from "styled-components";

export const StyledAboutMe = styled.div`
  ${(props) => displayBorders(props.theme)}
  margin-bottom: 0.3rem;
  display: flex;
  .aboutMeText {
    width: 50%;
  }
  .aboutMeImage {
    width: 50%;
    background-color: beige;
  }
`;

function displayBorders(theme, color) {
  if (theme.showBorders) {
    return css`
      outline-style: solid;
      outline-color: ${color ? color : "burlywood"};
    `;
  }
}
