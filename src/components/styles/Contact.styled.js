import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 65px;
  margin-top: 65px;
  ${(props) => displayBorders(props.theme)}
  color: ${(props) => props.theme.colors.brightFont};
  transition: color
    ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
  font-family: "Manrope", sans-serif;

  .title {
    font-family: "Manrope", sans-serif;
    font-size: 1.9rem;
    margin: 15px 0px 15px 0px;
    display: flex;
    justify-content: flex-start;
    font-weight: 500;
    ${(props) => displayBorders(props.theme)}
    max-width: 890px;
    justify-content: flex-start;
    width: -webkit-fill-available;
    align-self: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    &:after {
      content: "";
      display: block;
      position: relative;
      width: 300px;
      height: 1px;
      margin-left: 15px;
      background: linear-gradient(
        to left,
        ${(props) => props.theme.colors.AppBg},
        25%,
        ${(props) => props.theme.colors.darkFont}
      );
      transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
      z-index: -2;
    }
  }

  #body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    column-gap: 20px;
    row-gap: 20px;
    width: -webkit-fill-available;
    max-width: 890px;
    align-self: center;
    ${(props) => displayBorders(props.theme)}
  }

  #button {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    width: 230px;
    ${(props) => displayBorders(props.theme)}
  }
  h4 {
    margin-top: 0px;
    margin-bottom: 10px;
  }
  #icon {
    height: 40px;
    width: 40px;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90px;
    width: 230px;
    border-style: solid;
    border-radius: 8px;
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
      #icon {
        color: ${(props) => props.theme.colors.ThemeButton};
      }
    }
  }

  @media only screen and (max-width: 800px) {
    #body{
      justify-content: center;
    }
    h4 {
      visibility: hidden;
      height: 0px;
      width: 0px;
      margin: 0;
    }
    #button {
      height: 100px;
      width: 100px;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      height: 100px;
      width: 100px;
    }
    #icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 40px;
      margin: 0;
    }
  }
`;
