import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

export const StyledToolTip = styled(Tippy)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
  background-color: ${(props) => props.theme.colors.elementBg};
  color: ${(props) => props.theme.colors.brightFont};
  border-color: ${(props) => props.theme.colors.elementBorder};
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  box-shadow: 0px 0.5px 0.1px rgba(0, 0, 0, 0.002),
    0px 1.1px 0.2px rgba(0, 0, 0, 0.003), 0px 1.8px 0.4px rgba(0, 0, 0, 0.004),
    0px 2.7px 0.6px rgba(0, 0, 0, 0.004), 0px 3.9px 0.9px rgba(0, 0, 0, 0.005),
    0px 5.5px 1.2px rgba(0, 0, 0, 0.006), 0px 7.8px 1.8px rgba(0, 0, 0, 0.006),
    0px 11.3px 2.6px rgba(0, 0, 0, 0.007), 0px 17.4px 3.9px rgba(0, 0, 0, 0.008),
    0px 31px 7px rgba(0, 0, 0, 0.01);
`;
