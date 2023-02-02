import styled from 'styled-components'
import { DebugBorder } from '../../components/styles/Global'

export const StyledBody = styled.div`
    ${(props) => DebugBorder(props.theme, 'black')}
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 1rem;
`
