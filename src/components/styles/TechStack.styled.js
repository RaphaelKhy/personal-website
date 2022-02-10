import styled from "styled-components";

export const StyledTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    height: 30px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 16px;
    color: ${(props) => props.theme.colors.highContrastText};
    background-color: ${(props) => props.theme.colors.solidBg};
    transition: background-color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
      color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
  }
`;
