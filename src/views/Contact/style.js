import styled from 'styled-components'

import { DebugBorder } from '../../components/styles/Global'

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  margin: 65px 0;
  ${(props) => DebugBorder(props.theme)}
  color: ${(props) => props.theme.colors.fontLight};
  transition: color ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')};
  font-family: 'Manrope', sans-serif;

  .title {
    font-family: 'Manrope', sans-serif;
    font-size: 1.9rem;
    margin: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-weight: 500;
    ${(props) => DebugBorder(props.theme)}
    max-width: 890px;
    width: -webkit-fill-available;
    align-self: center;
    align-items: center;

    &:after {
      content: '';
      display: block;
      position: relative;
      width: 300px;
      height: 1px;
      margin-left: 15px;
      background: linear-gradient(
        to left,
        ${(props) => props.theme.colors.appBackground},
        25%,
        ${(props) => props.theme.colors.fontDark}
      );
      transition: color ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')};
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
    max-width: 890px;
    width: -webkit-fill-available;
    align-self: center;
    ${(props) => DebugBorder(props.theme)}
  }

  #button,
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    width: 230px;
    ${(props) => DebugBorder(props.theme)}
  }

  h4 {
    margin: 0 0 10px;
  }

  #icon {
    height: 40px;
    width: 40px;
    margin: 10px 0 5px;
  }

  a {
    border-style: solid;
    border-radius: 8px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.fontLight};
    border: unset;
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.elementBorder};
    background-color: ${(props) => props.theme.colors.elementBg};
    transition: color ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')},
      box-shadow ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')},
      background-color ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')};

    :hover {
      box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.fontDark};
      transition: background-color
          ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')},
        border-color ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')};
    }
  }

  @media only screen and (max-width: 800px) {
    #body {
      justify-content: space-evenly;
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
`
