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
  }

  #projectBody {
    width: 100%;
    display: flex;
    background-color: lightgray;
    border-radius: 0.6rem;
    padding: 0.5rem;
  }

  #projectText {
    ${(props) => displayBorders(props.theme, "silver")}
    width: 50%;
    padding-right: 0.5rem;
    #projectDescription {
      font-size: 18px;
    }
  }

  #technologies {
    display: flex;
    p {
      margin-right: 1rem;
      padding: 0px 3px;
      border-radius: 0.3rem;
      background-color: silver;
      align-items: center;
      display: flex;
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
    margin-right: 1rem;
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
