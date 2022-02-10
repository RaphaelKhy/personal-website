import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledAbout = styled.div`
  ${(props) => displayBorders(props.theme)}
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-self: center;
  max-width: 800px;
  color: ${(props) => props.theme.colors.highContrastText};
  transition: color
    ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

  .aboutMeText {
    padding-right: 1rem;
  }
  .aboutMeImage {
    display: flex;
    max-width: 400px;
    img {
      max-width: 100%;
      border-radius: 1rem;
      object-fit: cover;
    }
  }
`;
