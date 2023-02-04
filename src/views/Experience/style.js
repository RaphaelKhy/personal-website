import styled from 'styled-components'
import { DebugBorder } from '../../components/styles/Global'

export const StyledExperience = styled.div`
    ${(props) => DebugBorder(props.theme)}
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 65px;
    color: ${(props) => props.theme.colors.fontLight};
    transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')};

    #title {
        font-family: 'Manrope', sans-serif;
        font-size: 1.9rem;
        margin: 15px 0px 15px 0px;
        display: flex;
        justify-content: flex-start;
        font-weight: 500;
        ${(props) => DebugBorder(props.theme)}
        max-width: 890px;
        justify-content: flex-start;
        width: -webkit-fill-available;
        align-self: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        &:after {
            content: '';
            display: block;
            position: relative;
            width: 300px;
            height: 1px;
            margin-left: 15px;
            background: linear-gradient(
                to left,
                ${(props) => props.theme.colors.appBackground},
                25%,
                ${(props) => props.theme.colors.fontDark}
            );
            transition: color
                ${(props) =>
                    props.isTransition ? props.theme.transitionTime : '0s'};
            z-index: -2;
        }
    }

    #container {
        width: -webkit-fill-available;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 16px;
    }

    #role {
        display: flex;
        flex-wrap: wrap;
        padding-top: 0px;
        padding-bottom: 2px;
        margin: unset;
        font-weight: 500;
        ${(props) => DebugBorder(props.theme)}
        #at-sign {
            color: ${(props) => props.theme.colors.link};
            transition: color
                ${(props) =>
                    props.isTransition ? props.theme.transitionTime : '0s'};
        }
    }

    #company {
        ${(props) => DebugBorder(props.theme, 'black')}
        color: ${(props) => props.theme.colors.link};
        text-decoration: none;
        transition: color
            ${(props) =>
                props.isTransition ? props.theme.transitionTime : '0s'};
        display: inline-block;
        &:after {
            content: '';
            width: 0px;
            height: 2px;
            display: block;
            position: relative;
            background: ${(props) => props.theme.colors.link};
            transition: 300ms;
        }
        &:hover:after {
            width: 100%;
        }
    }

    #experienceCards {
        display: flex;
        justify-content: center;
        flex-direction: column;
        row-gap: 30px;
    }
`

export const Body = styled.div`
    padding-bottom: ${(props) => (props.hasContent ? '10px' : '0px')};
    display: flex;
    flex-direction: column;
    ${(props) => DebugBorder(props.theme)}
    color: ${(props) => props.theme.colors.fontDark};
    transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : '0s')};

    #dates {
        ${(props) => DebugBorder(props.theme)}
        padding-bottom: ${(props) => (props.hasContent ? '10px' : '0px')};
    }

    li {
        display: block;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;

        &:before {
            padding-right: 15px;
            box-sizing: inherit;
            content: '▹';
            position: relative;
            left: 0px;
            color: ${(props) => props.theme.colors.fontDark};
            transition: color
                ${(props) =>
                    props.isTransition ? props.theme.transitionTime : '0s'};
        }
    }
`
