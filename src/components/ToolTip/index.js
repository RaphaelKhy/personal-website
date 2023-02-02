import React from 'react'
import { StyledToolTip } from './style'

export default function ToolTip(props) {
    return (
        <StyledToolTip
            arrow={false}
            animation="shift-away"
            content={props.text}
            placement={'bottom'}
            allowHTML={true}
            delay={props.delay}
        >
            {props.content}
        </StyledToolTip>
    )
}
