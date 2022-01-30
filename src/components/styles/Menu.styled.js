import styled from "styled-components";

export const StyledMenu = styled.div`
  border-color: aquamarine;
  border-style: solid;
  margin-left: 0.3rem;
  display: flex;
  flex-direction: row;
  align-items:center;
  a {
    color: black; /* Unvisited link  */
    text-decoration: none;
    margin: 1rem;
  }
  a:hover {
    color: purple; /* Mouse over link */
  }
`;
