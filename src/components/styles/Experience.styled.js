import styled, { css } from "styled-components";

export const StyledExperience = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.colors.highContrastText};
  padding: 0.3rem;

  #title {
    display: flex;
    justify-content: center;
  }

  #IvyScope {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  #Company {
    display: flex;
    flex-direction: column;
    column-gap: 20px;
    ${(props) => displayBorders(props.theme, "black")}
    width: 30%;
    margin-right: 1rem;
    #CompanyName {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      column-gap: 1rem;
      ${(props) => displayBorders(props.theme)}
      img {
        height: 32px;
        width: 32px;
      }
    }
    #CompanyDates {
      ${(props) => displayBorders(props.theme)}
      color: ${(props) => props.theme.colors.lowContrastText};
    }
  }

  #ExperienceBody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${(props) => displayBorders(props.theme)}

    #ExperienceTitle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      ${(props) => displayBorders(props.theme)}
    }
    #ExperienceBody {
      p {
        margin-top: 0px;
      }
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
`;

function displayBorders(theme, color) {
  if (theme.showBorders) {
    return css`
      outline-style: solid;
      outline-color: ${color ? color : "burlywood"};
    `;
  }
}
