import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledContactMe = styled.div`
  ${(props) => displayBorders(props.theme)}
  color: ${(props) => props.theme.colors.highContrastText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 65px;

  .title {
    ${(props) => displayBorders(props.theme)}
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }

  #contactBody {
    ${(props) => displayBorders(props.theme)}
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 40px;
    row-gap: 20px;
    width: 80%;
    max-width: 800px;
    align-self: center;

    #email {
      ${(props) => displayBorders(props.theme)}
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 200px;
      h3 {
        margin-top: 0px;
        margin-bottom: 0px;
      }
    }
    #linkedIn {
      ${(props) => displayBorders(props.theme)}
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100px;
      width: 200px;
      h3 {
        margin-top: 2px;
        margin-bottom: 2px;
      }
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    width: 200px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.elementBorder};
    border-radius: 0.3rem;
    padding: 0.3rem;
    color: ${(props) => props.theme.colors.highContrastText};
    text-decoration: none;
    :hover {
      border-color: ${(props) => props.theme.colors.hoveredElementBorder};
      background-color: ${(props) => props.theme.colors.hoveredElementBg};
      /* box-shadow: 0 0 0.5rem ${(props) => props.theme.colors.hoveredElementBorder}; */
      #linkedinIcon {
        color: #2867b2;
      }
    }
  }
`;
