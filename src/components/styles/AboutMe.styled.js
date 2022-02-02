import styled, { css } from "styled-components";

export const StyledAboutMe = styled.div`
  ${(props) => displayBorders(props.theme)}
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-self: center;
  max-width: 800px;
  color: ${(props) => props.theme.colors.highContrastText};

  .aboutMeText {
    padding-right: 1rem;
  }
  .aboutMeImage {
    display: flex;
    max-width: 400px;
    img {
      max-width: 100%;
      border-radius: 1rem;
      object-fit: cover;
    }
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
