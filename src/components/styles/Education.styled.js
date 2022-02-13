import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledEducation = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 65px;
  color: ${(props) => props.theme.colors.highContrastText};
  transition: color
    ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

  #title {
    display: flex;
    justify-content: center;
    font-weight: 500;
    ${(props) => displayBorders(props.theme)}
  }

  #container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  #school {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    column-gap: 20px;
    width: 100%;
    margin-right: 1rem;
    ${(props) => displayBorders(props.theme, "black")}
    #schoolName {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      flex-wrap: wrap;
      column-gap: 1rem;
      ${(props) => displayBorders(props.theme)}
      img {
        width: 36px;
      }
      a {
        color: ${(props) => props.theme.colors.highContrastText};
        text-decoration: none;
        transition: color
          ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
      }
      h2 {
        font-weight: 500;
      }
    }
    #dates {
      ${(props) => displayBorders(props.theme)}
      color: ${(props) => props.theme.colors.lowContrastText};
      transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    }
  }

  #body {
    #major {
      display: flex;
      flex-direction: column;
      justify-content: center;
      ${(props) => displayBorders(props.theme)}
      font-weight: 500;
    }
  }
`;
