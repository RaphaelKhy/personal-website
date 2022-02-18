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
  }
`;
