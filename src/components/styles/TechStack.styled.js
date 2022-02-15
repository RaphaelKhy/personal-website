import styled from "styled-components";

export const StyledTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  p {
    display: flex;
    column-gap: 0.25rem;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    height: 30px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 0.5rem;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.elementBorder};
    color: ${(props) => props.theme.colors.highContrastText};
    transition: border-color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
      color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    svg {
      color: ${(props) => props.theme.colors.highContrastText};
      transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    }
    :hover {
      transition: color 0.2s ease 0s, transform 0.2s ease 0s,
        background-position 0.3s ease-out 0s;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        rgb(24, 41, 62) 50%
      );
      background-size: 225%;
    }
  }
`;
