import styled from "styled-components";
import { displayBorders } from "./Global";

export const StyledCard = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.elementBg};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.elementBorder};
  border-radius: 16px;
  max-width: 890px;
  width: -webkit-fill-available;
  width: -moz-available;
  ${(props) => displayBorders(props.theme, "yellow")}
  align-self: center;
  box-shadow: 0px 0.5px 0.3px rgba(0, 0, 0, 0.004),
    0px 1.1px 0.8px rgba(0, 0, 0, 0.006), 0px 1.8px 1.3px rgba(0, 0, 0, 0.008),
    0px 2.7px 1.9px rgba(0, 0, 0, 0.009), 0px 3.9px 2.8px rgba(0, 0, 0, 0.01),
    0px 5.5px 3.9px rgba(0, 0, 0, 0.011), 0px 7.8px 5.5px rgba(0, 0, 0, 0.012),
    0px 11.3px 8px rgba(0, 0, 0, 0.014), 0px 17.4px 12.4px rgba(0, 0, 0, 0.016),
    0px 31px 22px rgba(0, 0, 0, 0.02);

  transition: border-color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
    background-color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
`;
