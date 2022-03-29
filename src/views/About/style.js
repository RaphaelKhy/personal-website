import styled from "styled-components";
import { DebugBorder } from "../../components/styles/Global";

export const StyledAbout = styled.div`
  ${(props) => DebugBorder(props.theme, "blue")}
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
    font-family: "Manrope", sans-serif;
    font-size: 3rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p {
    color: ${(props) => props.theme.colors.darkFont};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    font-size: 1.3rem;
    line-height: 2rem;
    margin-bottom: 0px;
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
      color: ${(props) => props.theme.colors.AppBg};
      background-color: ${(props) => props.theme.colors.link};
      transition: color 0s, background-color 0s;
    }
  }
`;
