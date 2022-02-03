import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledAboutMe = styled.div`
  ${(props) => displayBorders(props.theme)}
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-self: center;
  max-width: 800px;
  color: ${(props) => props.theme.colors.highContrastText};

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
