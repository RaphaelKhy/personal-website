import styled, { css } from "styled-components";

export const StyledExperience = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 65px;
  color: ${(props) => props.theme.colors.brightFont};
  transition: color
    ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

  #title {
    font-family: "Manrope", sans-serif;
    font-size: 1.9rem;
    margin: 15px 0px 15px 0px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    ${(props) => displayBorders(props.theme)}
    max-width: 890px;
    justify-content: flex-start;
    width: -webkit-fill-available;
    align-self: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    &:after {
      content: "";
      display: block;
      position: relative;
      width: 300px;
      height: 1px;
      margin-left: 15px;
      background: linear-gradient(
        to left,
        ${(props) => props.theme.colors.AppBg},
        25%,
        ${(props) => props.theme.colors.darkFont}
      );
      transition: all
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
      z-index: -2;
    }
  }

  #container {
    width: -webkit-fill-available;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  #company {
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
    max-width: 180px;
    margin-right: 8px;
    margin-left: 16px;
    ${(props) => displayBorders(props.theme, "black")}
    #name {
      font-family: "Manrope", sans-serif;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      flex-wrap: wrap;
      column-gap: 1rem;
      ${(props) => displayBorders(props.theme)}
      img {
        height: 36px;
      }
      a {
        color: ${(props) => props.theme.colors.brightFont};
        text-decoration: none;
        transition: color
          ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
      }
      h2 {
        font-weight: 500;
      }
    }
    #dates {
      font-size: 1rem;
      ${(props) => displayBorders(props.theme)}
      color: ${(props) => props.theme.colors.darkFont};
      transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    }
  }

  #body {
    width: -webkit-fill-available;
    #role {
      font-family: "Manrope", sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      ${(props) => displayBorders(props.theme)}
      font-weight: 500;
    }
    .description {
      color: ${(props) => props.theme.colors.darkFont};
      transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    }
  }

  #experienceCards {
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 30px;
  }
`;

export const StyledExperienceMobile = styled.div`
  ${(props) => displayBorders(props.theme)}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 65px;
  color: ${(props) => props.theme.colors.brightFont};
  transition: color
    ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

  #title {
    font-family: "Manrope", sans-serif;
    font-size: 1.9rem;
    margin: 15px 0px 15px 0px;
    display: flex;
    justify-content: flex-start;
    font-weight: 500;
    ${(props) => displayBorders(props.theme)}
    max-width: 890px;
    justify-content: flex-start;
    width: -webkit-fill-available;
    align-self: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    &:after {
      content: "";
      display: block;
      position: relative;
      width: 300px;
      height: 1px;
      margin-left: 15px;
      background: linear-gradient(
        to left,
        ${(props) => props.theme.colors.AppBg},
        25%,
        ${(props) => props.theme.colors.darkFont}
      );
      transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
      z-index: -2;
    }
  }

  #container {
    width: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  #role {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    padding-bottom: 2px;
    margin: unset;
    font-weight: 500;
    ${(props) => displayBorders(props.theme)}
    #at-sign {
      color: ${(props) => props.theme.colors.link};
      transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    }
  }

  #company {
    ${(props) => displayBorders(props.theme, "black")}
    ${(props) => displayBorders(props.theme)}
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    display: inline-block;
    &:after {
      content: "";
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

  #body {
    margin-bottom: 10px;
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    ${(props) => displayBorders(props.theme)}
    color: ${(props) => props.theme.colors.darkFont};
    transition: color
      ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};

    #dates {
      margin-bottom: 10px;
      ${(props) => displayBorders(props.theme)}
    }

    li {
      display: block;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;

      &:before {
        padding-right: 15px;
        box-sizing: inherit;
        content: "▹";
        position: relative;
        left: 0px;
        color: ${(props) => props.theme.colors.darkFont};
        transition: color
          ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
      }
    }
  }

  #experienceCards {
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 30px;
  }
`;

function displayBorders(theme, color) {
  if (theme.showBorders) {
    return css`
      outline-style: solid;
      outline-color: ${color ? color : "burlywood"};
    `;
  }
}
