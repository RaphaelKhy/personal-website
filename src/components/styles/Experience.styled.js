import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledExperience = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 65px;
  color: ${(props) => props.theme.colors.brightFont};
  transition: color
    ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

  #title {
    font-family: 'Manrope', sans-serif;
    display: flex;
    justify-content: center;
    font-weight: 500;
    ${(props) => displayBorders(props.theme)}
    max-width: 890px;
    justify-content: flex-start;
    width: -webkit-fill-available;
    align-self: center;
    display: flex;
    flex-direction: row;
  }

  #container {
    width: -webkit-fill-available;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.5rem;
  }

  #company {
    display: flex;
    flex-direction: column;
    column-gap: 20px;
    width: -webkit-fill-available;
    max-width: 180px;
    margin-right: 1rem;
    ${(props) => displayBorders(props.theme, "black")}
    #name {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      flex-wrap: wrap;
      column-gap: 1rem;
      ${(props) => displayBorders(props.theme)}
      img {
        height: 36px;
      }
      a {
        color: ${(props) => props.theme.colors.brightFont};
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
      color: ${(props) => props.theme.colors.darkFont};
      transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    }
  }

  #body {
    width: -webkit-fill-available;
    #role {
      display: flex;
      flex-direction: column;
      justify-content: center;
      ${(props) => displayBorders(props.theme)}
      font-weight: 500;
    }
  }

  #experienceCards {
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 50px;
  }
`;
