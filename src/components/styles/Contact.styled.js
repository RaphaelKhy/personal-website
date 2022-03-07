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
    font-weight: 400;
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
    border: unset;
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.elementBorder};
    background-color: ${(props) => props.theme.colors.elementBg};
    transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
      box-shadow
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
      background-color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

    :hover {
      transform: translate(0, -2px);
      box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.elementBorder},
        0px 0.5px 0.5px rgba(0, 0, 0, 0.015),
        0px 1.1px 1.1px rgba(0, 0, 0, 0.022),
        0px 1.8px 1.9px rgba(0, 0, 0, 0.027),
        0px 2.7px 2.9px rgba(0, 0, 0, 0.031),
        0px 3.9px 4.1px rgba(0, 0, 0, 0.035),
        0px 5.5px 5.8px rgba(0, 0, 0, 0.039),
        0px 7.8px 8.3px rgba(0, 0, 0, 0.043),
        0px 11.3px 12px rgba(0, 0, 0, 0.048),
        0px 17.4px 18.6px rgba(0, 0, 0, 0.055),
        0px 31px 33px rgba(0, 0, 0, 0.07);
      transition: background-color
          ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
        border-color
          ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
        transform 0.2s, box-shadow 0.2s;
      #emailIcon {
        color: ${(props) => props.theme.colors.ThemeButton};
      }
      #linkedinIcon {
        color: ${(props) => props.theme.colors.ThemeButton};
      }
    }
  }
`;
