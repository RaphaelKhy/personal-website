import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";
import styled from "styled-components";

export default function ToolTip(props) {
  return (
    <StyledTippy
      arrow={false}
      animation="shift-away"
      content={props.text}
      placement="bottom"
      allowHTML={true}
      delay={500}
    >
      {props.content}
    </StyledTippy>
  );
}

export const StyledTippy = styled(Tippy)`
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
