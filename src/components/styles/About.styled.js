import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledAbout = styled.div`
  ${(props) => displayBorders(props.theme)}
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-self: center;
  max-width: 890px;
  width: -webkit-fill-available;
  color: ${(props) => props.theme.colors.highContrastText};
  transition: color
    ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

  #name {
    margin-bottom: 0.5rem;
  }

  #title {
    color: ${(props) => props.theme.colors.lowContrastText};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    margin-top: 0.5rem;
  }

  .aboutMeImage {
    display: flex;
    width: 250px;
    height: 250px;
    img {
      max-width: 100%;
      border-radius: 1rem;
      object-fit: cover;
    }
  }
  a {
    color: ${(props) => props.theme.colors.highContrastText};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    :hover {
      color: ${(props) => props.theme.colors.link};
    }
  }
`;
