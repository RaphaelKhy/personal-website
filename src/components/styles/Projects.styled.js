import styled, { css } from "styled-components";

export const StyledProjects = styled.div`
  ${(props) => displayBorders(props.theme, "brown")}
  display: flex;
  flex-direction: column;
  padding: 0.3rem;

  .title {
    ${(props) => displayBorders(props.theme, "green")}
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.colors.highContrastText};
  }

  #project {
    display: flex;
    align-self: center;
    flex-direction: column;
    max-width: 800px;
  }

  #projectTitle {
    padding: 0.5rem;
    margin-bottom: 0rem;
    color: ${(props) => props.theme.colors.highContrastText};
  }

  #projectText {
    ${(props) => displayBorders(props.theme, "silver")}
    color: ${(props) => props.theme.colors.highContrastText};
    width: 50%;
    #projectDescription {
    }
  }

  #technologies {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    p {
      padding: 0.3rem;
      border-radius: 16px;
      background-color: ${(props) => props.theme.colors.solidBg};
      align-items: center;
      display: flex;
      margin-top: 0px;
    }
  }

  #PortfolioVisualizerImage {
    ${(props) => displayBorders(props.theme, "blue")}
    width: 50%;
    
    img {
      max-width: 100%;
      max-height: 25rem;
      border-radius: 0.6rem;
    }
  }

  a {
    color: ${(props) => props.theme.colors.lowContrastText};
    margin-right: 1rem;
    :hover {
      color: ${(props) => props.theme.colors.highContrastText};
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
