import styled from "styled-components";

export const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.25rem;
    margin-top: 0px;
    margin-bottom: 8px;
    height: 30px;
    padding: 0 12px 0 12px;
    border-radius: 16px;
    border: 1px solid ${(props) => props.theme.colors.elementBorder};
    color: ${(props) => props.theme.colors.brightFont};
    /* background-color: ${(props) => hexToRgbA(props.theme.colors.link)}; */
    transition: border-color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
      color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")},
      background-color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    svg {
      color: ${(props) => props.theme.colors.brightFont};
      transition: color
        ${(props) => (props.isTransition ? props.theme.transitionTime : "0s")};
    }
  }
`;

function hexToRgbA(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",0.1)"
    );
  }
}
