import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledContactMe = styled.div`
  ${(props) => displayBorders(props.theme)}
  color: ${(props) => props.theme.colors.highContrastText};
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    justify-content: center;
    font-weight: normal;
  }

  #contactBody {
    display: flex;
    max-width: 800px;
    flex-direction: row;
    #email {
      display: flex;
    }
    #linkedIn {
      display: flex;
      justify-content: center;
    }
  }
`;
