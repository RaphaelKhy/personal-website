import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledAbout = styled.div`
  ${(props) => displayBorders(props.theme, "green")}
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-self: center;
  max-width: 890px;
  width: -webkit-fill-available;
  color: ${(props) => props.theme.colors.brightFont};
  transition: color
    ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

  #name {
    margin-bottom: 0.5rem;
    font-family: "Manrope", sans-serif;
    font-size: 3rem;
  }

  p {
    color: ${(props) => props.theme.colors.darkFont};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    font-size: 1.3rem;
  }

  a {
    font-weight: 600;
    color: ${(props) => props.theme.colors.brightFont};
    text-decoration-color: ${(props) => props.theme.colors.link};
    transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
      text-decoration-color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    :hover {
      color: ${(props) => props.theme.colors.link};
    }
  }
`;
