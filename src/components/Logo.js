import { StyledLogo } from "./styles/Logo.styled";

export default function Logo(props) {
  const HandleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <StyledLogo isTransition={props.isTransition}>
      <div id="logo" onClick={HandleClick}>
        RK
      </div>
    </StyledLogo>
  );
}
