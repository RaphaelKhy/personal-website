import styled from 'styled-components'

import { DebugBorder } from '../../components/styles/Global'

export const StyledProjects = styled.div`
  ${(props) => DebugBorder(props.theme, 'brown')}
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  color: ${(props) => props.theme.colors.fontLight};
  transition: color ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')};

  .title {
    font-family: 'Manrope', sans-serif;
    font-size: 1.9rem;
    margin: 15px 0px 15px 0px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    max-width: 890px;
    justify-content: flex-start;
    width: -webkit-fill-available;
    align-self: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    ${(props) => DebugBorder(props.theme, 'green')}

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
      transition: all ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')};
      z-index: -2;
    }
  }

  #projectCards {
    display: flex;
    align-self: center;
    flex-direction: column;
    row-gap: 30px;
  }

  #project {
    display: flex;
    align-self: center;
    flex-direction: column;
    width: 100%;
  }

  #projectImage {
    display: flex;
    justify-content: center;
    ${(props) => DebugBorder(props.theme, 'blue')}
    img {
      max-width: 100%;
      max-height: 500px;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      object-fit: cover;
    }
  }

  #header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #links {
    a {
      color: ${(props) => props.theme.colors.fontDark};
      transition: color ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')};
      margin-right: 1rem;
      :hover {
        color: ${(props) => props.theme.colors.link};
        transition: color 0s;
      }
    }
  }

  #body {
    padding: 0 16px 8px 16px;
  }

  #projectTitle {
    font-family: 'Manrope', sans-serif;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0rem;
    font-weight: 500;
    margin-top: 0px;

    a {
      color: ${(props) => props.theme.colors.fontLight};
      text-decoration: none;
      transition: color ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')};
    }
  }

  #text {
    p {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    .description {
      color: ${(props) => props.theme.colors.fontDark};
      transition: color ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')};
    }
    ${(props) => DebugBorder(props.theme, 'silver')}
    color: ${(props) => props.theme.colors.fontLight};
    transition: color ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')};
  }
`
