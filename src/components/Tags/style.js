import styled from "styled-components";

export const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.25rem;
    margin-top: 0px;
    margin-bottom: 8px;
    height: 30px;
    padding: 0 12px 0 12px;
    border-radius: 16px;
    border: 1px solid ${(props) => props.theme.colors.elementBorder};
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
