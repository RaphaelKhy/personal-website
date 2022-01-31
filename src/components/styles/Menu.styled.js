import styled, { css } from "styled-components";

export const StyledMenu = styled.div`
  ${(props) => displayBorders(props.theme)}
  margin-left: 0.3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    color: black; /* Unvisited link  */
    text-decoration: none;
    margin: 1rem;
  }
  a:hover {
    color: purple; /* Mouse over link */
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
