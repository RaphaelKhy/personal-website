import styled, { css } from "styled-components";

export const StyledExperiene = styled.div`
  ${(props) => displayBorders(props.theme)}
  padding: 0.3rem;
  margin-bottom: 0.3rem;
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    justify-content: center;
    ${(props) => displayBorders(props.theme)}
  }
  #experienceBody {
    display: flex;
    justify-content: center;
  }
  #IvyScope {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #IvyScopeTitle {
    ${(props) => displayBorders(props.theme)}
    margin-right: 3rem;
  }
  #IvyScopeBody {
    ${(props) => displayBorders(props.theme)}
    #IvyScopeBodyTitle {
      display: flex;
      justify-content: center;
    }
    #Technologies {
      display: flex;
      justify-content: center;
    }
  }
  ul {
    list-style-type: none;
  }
`;

function displayBorders(theme, color) {
  if (theme.showBorders) {
    return css`
      outline-style: solid;
      outline-color: ${color ? color : "burlywood"};
    `;
  }
}
