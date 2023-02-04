import Tippy from '@tippyjs/react'
import styled from 'styled-components'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/dist/tippy.css'

export const StyledToolTip = styled(Tippy)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: auto;
    background-color: ${(props) => props.theme.colors.elementBg};
    color: ${(props) => props.theme.colors.fontLight};
    border-color: ${(props) => props.theme.colors.elementBorder};
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`
