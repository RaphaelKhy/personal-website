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
    color: ${(props) => props.theme.colors.highContrastText};
    font-weight: 500;
  }

  #project {
    display: flex;
    align-self: center;
    flex-direction: column;
  }

  #projectTitle {
    padding: 0.5rem;
    margin-bottom: 0rem;
    color: ${(props) => props.theme.colors.highContrastText};
    font-weight: 500;
  }

  #projectText {
    ${(props) => displayBorders(props.theme, "silver")}
    color: ${(props) => props.theme.colors.highContrastText};
    width: 50%;
    a {
      color: ${(props) => props.theme.colors.lowContrastText};
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
