import styled from "styled-components";
import { displayBorders } from "./Global";
import { useTheme, css } from "styled-components";
import { lightTheme } from "../Themes";

const GetShadow = () => {
  const theme = useTheme();
  if (theme === lightTheme) {
    return css`
      box-shadow: 0px 0px 1.4px rgba(0, 0, 0, 0.02),
        0px 0px 3.3px rgba(0, 0, 0, 0.028), 0px 0px 6.3px rgba(0, 0, 0, 0.035),
        0px 0px 11.2px rgba(0, 0, 0, 0.042), 0px 0px 20.9px rgba(0, 0, 0, 0.05),
        0px 0px 50px rgba(0, 0, 0, 0.07);
    `;
  } else {
    return css`
      box-shadow: 0 0 0 1px rgb(52, 53, 54);
    `;
  }
};

export const StyledCard = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.elementBg};
  border-radius: 16px;
  max-width: 890px;
  width: -webkit-fill-available;
  width: -moz-available;
  ${(props) => displayBorders(props.theme, "yellow")}
  align-self: center;
  ${GetShadow}
  transition: box-shadow
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
    background-color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
`;
