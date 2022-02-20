import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledProjects = styled.div`
  ${(props) => displayBorders(props.theme, "brown")}
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  column-gap: 50px;

  .title {
    ${(props) => displayBorders(props.theme, "green")}
    display: flex;
    justify-content: center;
    font-weight: 500;
    color: ${(props) => props.theme.colors.highContrastText};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    max-width: 890px;
    justify-content: flex-start;
    width: -webkit-fill-available;
    align-self: center;
    display: flex;
    flex-direction: row;
  }

  #projectCards {
    display: flex;
    align-self: center;
    flex-direction: column;
    row-gap: 50px;
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
    ${(props) => displayBorders(props.theme, "blue")}
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
      color: ${(props) => props.theme.colors.lowContrastText};
      transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
      margin-right: 1rem;
      :hover {
        color: ${(props) => props.theme.colors.link};
      }
    }
  }

  #body {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  #projectTitle {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0rem;
    font-weight: 500;
    margin-top: 0px;

    a {
      color: ${(props) => props.theme.colors.highContrastText};
      text-decoration: none;
      transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    }
  }

  #text {
    p{
      margin-top: 0.5rem;
    }
    ${(props) => displayBorders(props.theme, "silver")}
    color: ${(props) => props.theme.colors.highContrastText};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
  }
`;
