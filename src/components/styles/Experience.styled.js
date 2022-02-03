import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledExperience = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.colors.highContrastText};

  #title {
    display: flex;
    justify-content: center;
    font-weight: normal;
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
      a {
        color: ${(props) => props.theme.colors.highContrastText};
        text-decoration: none;
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
`;
