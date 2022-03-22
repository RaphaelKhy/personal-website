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
    margin-bottom: 8px;
    height: 30px;
    padding: 0px 12px 0px 12px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    font-size: 1rem;
    border-color: ${(props) => props.theme.colors.elementBorder};
    color: ${(props) => props.theme.colors.brightFont};
    transition: border-color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
      color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    svg {
      color: ${(props) => props.theme.colors.brightFont};
      transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    }
  }
`;