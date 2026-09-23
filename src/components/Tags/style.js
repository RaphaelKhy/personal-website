import styled from 'styled-components'

import { hexToRgba } from '../styles/Global'

export const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    margin: 0 0 8px;
    height: 30px;
    padding: 0 12px;
    border-radius: 16px;
    color: ${(props) => props.theme.colors.fontLight};
    background-color: ${(props) => hexToRgba(props.theme.colors.link, 0.15)};
    transition: background-color, border-color,
      color ${(props) => props.isTransition && props.theme.transitionTime};

    svg {
      color: ${(props) => props.theme.colors.fontLight};
      transition: color ${(props) => props.isTransition && props.theme.transitionTime};
    }
  }

  /* Smaller pills and even 8px gaps, so more tags fit on each row */
  @media only screen and (max-width: 800px) {
    gap: 8px;
    margin-bottom: 8px;

    p {
      margin: 0;
      height: 28px;
      padding: 0 10px;
      font-size: 0.875rem;
    }
  }
`
