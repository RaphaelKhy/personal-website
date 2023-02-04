import styled from 'styled-components'
import { DebugBorder } from '../../components/styles/Global'
import { hexToRgba } from '../../components/styles/Global'

const headerHeight = 50

export const StyledHeader = styled.header`
    ${(props) => DebugBorder(props.theme)}
    flex-direction: row;
    border-bottom: 1px solid ${(props) => props.theme.colors.elementBorder};
    position: sticky;
    top: 0;
    background-color: ${(props) => hexToRgba(props.theme.colors.headerBg, 0.7)};
    backdrop-filter: blur(10px);
    z-index: 2;
    overflow: unset;

    transition: background-color
            ${(props) =>
                props.isTransition ? props.theme.transitionTime : '0s'},
        border-color
            ${(props) =>
                props.isTransition ? props.theme.transitionTime : '0s'};

    #container {
        display: flex;
        justify-content: space-between;
        padding: 0px 25px 0px 25px;
        max-width: 890px;
        margin: auto;
        height: ${headerHeight + 'px'};
    }
`

export const StyledThemeButton = styled.div`
    #button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: unset;
        background-color: unset;
        border-radius: 0.5rem;
        height: 40px;
        width: 40px;
        color: ${(props) => props.theme.colors.fontLight};
        transition: color
            ${(props) =>
                props.isTransition ? props.theme.transitionTime : '0s'};
        :hover {
            cursor: pointer;
            background-color: ${(props) => props.theme.colors.buttonHover};
            transition: background-color
                    ${(props) =>
                        props.isTransition ? props.theme.transitionTime : '0s'},
                color
                    ${(props) =>
                        props.isTransition ? props.theme.transitionTime : '0s'};
        }
        #svg {
            height: 25px;
            width: 25px;
        }
    }
`

export const StyledLogo = styled.div`
    ${(props) => DebugBorder(props.theme)}
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 20px;
    font-size: 20px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.fontLight};
    text-decoration: none;
    transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')};

    #logo {
        display: inline-block;
        font-weight: 500;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.fontLight};
        text-decoration: none;
        padding-top: 0.1em;
        transition: color
            ${(props) =>
                props.isTransition ? props.theme.transitionTime : '0s'};
    }

    #logo:after {
        content: '';
        width: 0px;
        height: 1.5px;
        display: block;
        background: ${(props) => props.theme.colors.link};
        transition: 300ms;
    }

    #logo:hover:after {
        width: 100%;
    }
`

export const StyledMenu = styled.div`
    ${(props) => DebugBorder(props.theme)}
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 20px;

    a {
        font-weight: 400;
        font-size: 1rem;
        display: inline-block;
        color: ${(props) => props.theme.colors.fontLight};
        text-decoration: none;
        padding-top: 0.1em;
        transition: color
            ${(props) =>
                props.isTransition ? props.theme.transitionTime : '0s'};
    }

    a:after {
        content: '';
        width: 0px;
        height: 1.5px;
        display: block;
        background: ${(props) => props.theme.colors.link};
        transition: 300ms;
    }

    a:hover:after {
        width: 100%;
    }
`

export const StyledMobileMenu = styled.div`
    ${(props) => DebugBorder(props.theme)}
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 20px;

    .hamburger-react {
        color: ${(props) => props.theme.colors.fontLight};
        transition: all 0s;
    }

    #hamburger {
        transition: all 0s;
    }

    .mobile-nav {
        position: fixed;
        top: 0;
        left: 100%;
        width: 100%;
        margin-top: ${headerHeight + 1 + 'px'};
        min-height: 100vh;
        display: block;
        background-color: ${(props) => props.theme.colors.appBackground};
        color: ${(props) => props.theme.colors.fontLight};
        padding-top: 120px;
        transition: all 0.3s,
            background-color
                ${(props) =>
                    props.isTransition ? props.theme.transitionTime : '0s'},
            color
                ${(props) =>
                    props.isTransition ? props.theme.transitionTime : '0s'};
    }

    .mobile-nav.is-active {
        left: 0;
    }

    .mobile-nav a {
        font-size: larger;
        display: block;
        width: 100%;
        max-width: 200px;
        margin: 0 auto 16px;
        text-align: center;
        padding: 12px 16px;
        color: ${(props) => props.theme.colors.fontLight};
        text-decoration: none;
    }

    .mobile-nav a:hover {
        background-color: ${(props) => props.theme.colors.hoveredElementBg};
    }
`
