import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.elementBg};
  border-style: solid;
  border-color: ${(props) => props.theme.colors.elementBorder};
  border-radius: 0.6rem;
  padding: 0.5rem;
  max-width: 800px;
  align-self: center;
  :hover {
    background-color: ${(props) => props.theme.colors.hoveredElementBg};
    border-color: ${(props) => props.theme.colors.hoveredElementBorder};
  }
`;
