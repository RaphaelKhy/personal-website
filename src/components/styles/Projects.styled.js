import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledProjects = styled.div`
  ${(props) => displayBorders(props.theme, "brown")}
  display: flex;
  flex-direction: column;

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
  }

  #projectTitle {
    padding: 0.5rem;
    margin-bottom: 0rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.highContrastText};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
  }

  #text {
    ${(props) => displayBorders(props.theme, "silver")}
    width: 50%;
    color: ${(props) => props.theme.colors.highContrastText};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
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

  #projectImage {
    ${(props) => displayBorders(props.theme, "blue")}
    width: 50%;
    img {
      max-width: 100%;
      max-height: 25rem;
      border-radius: 0.6rem;
    }
  }
`;
