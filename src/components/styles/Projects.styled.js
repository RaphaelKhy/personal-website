import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledProjects = styled.div`
  ${(props) => displayBorders(props.theme, "brown")}
  display: flex;
  flex-direction: column;
  margin-top: 65px;

  .title {
    ${(props) => displayBorders(props.theme, "green")}
    display: flex;
    justify-content: center;
    font-weight: 500;
    color: ${(props) => props.theme.colors.highContrastText};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
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
      border-radius: 0.5rem;
      object-fit: cover;
    }
  }

  #header {
    width: 100%;
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
        color: ${(props) => props.theme.colors.highContrastText};
      }
    }
  }
  
  #body{
    padding-left: 1rem;
    padding-right: 1rem;
  }

  #projectTitle {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0rem;
    font-weight: 500;
    margin-top: 0px;
    color: ${(props) => props.theme.colors.highContrastText};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
  }

  #text {
    ${(props) => displayBorders(props.theme, "silver")}
    width: 100%;
    color: ${(props) => props.theme.colors.highContrastText};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
  }

  #projectCard{
    margin-bottom: 50px;
  }
`;
