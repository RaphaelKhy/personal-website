import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 65px;
  margin-top: 65px;
  ${(props) => displayBorders(props.theme)}
  color: ${(props) => props.theme.colors.brightFont};
  transition: color
    ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

  .title {
    font-family: "Manrope", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    ${(props) => displayBorders(props.theme)}
  }

  #body {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 40px;
    row-gap: 20px;
    width: 80%;
    max-width: 800px;
    align-self: center;
    ${(props) => displayBorders(props.theme)}

    #email {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 230px;
      ${(props) => displayBorders(props.theme)}
      a {
        justify-content: space-around;
      }
      #title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      h3 {
        margin-top: 0px;
        margin-bottom: 0px;
      }
    }
    #linkedIn {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100px;
      width: 230px;
      ${(props) => displayBorders(props.theme)}
      a {
        justify-content: space-around;
      }
      h3 {
        margin-top: 2px;
        margin-bottom: 2px;
      }
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    width: 230px;
    border-style: solid;
    border-radius: 0.3rem;
    padding: 0.3rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.brightFont};
    border-color: ${(props) => props.theme.colors.elementBorder};
    transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
      border-color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

    :hover {
      border-color: ${(props) => props.theme.colors.hoveredElementBorder};
      background-color: ${(props) => props.theme.colors.hoveredElementBg};
      transition: background-color
          ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
        border-color
          ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
      #emailIcon {
        color: ${(props) => props.theme.colors.ThemeButton};
      }
      #linkedinIcon {
        color: ${(props) => props.theme.colors.ThemeButton};
      }
    }
  }
`;
