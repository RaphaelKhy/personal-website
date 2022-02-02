import styled from "styled-components";

export const StyledTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  p {
    padding: 0.3rem;
    border-radius: 16px;
    background-color: ${(props) => props.theme.colors.solidBg};
    align-items: center;
    display: flex;
    margin-top: 0px;
  }
`;
