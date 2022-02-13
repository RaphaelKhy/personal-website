import React from "react";
import { StyledToolTip } from "./styles/ToolTip.styled";

export default function ToolTip(props) {
  return (
    <StyledToolTip
      arrow={false}
      animation="shift-away"
      content={props.text}
      placement="bottom"
      allowHTML={true}
      delay={500}
    >
      {props.content}
    </StyledToolTip>
  );
}
