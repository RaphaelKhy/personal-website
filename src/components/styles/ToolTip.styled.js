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
  background-color: ${(props) => props.theme.colors.AppBg};
  color: ${(props) => props.theme.colors.highContrastText};
  border-color: ${(props) => props.theme.colors.hoveredElementBorder};
  border-style: solid;
  border-width: 1px;
  border-radius: 0.5rem;
`;
