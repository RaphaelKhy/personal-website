import { StyledLogo } from "./style";

export default function Logo(props) {
  const HandleClick = () => {
    props.setIsMobileMenuActive(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <StyledLogo isTransition={props.isTransition}>
      <div id="logo" onClick={HandleClick}>
        Raphael Khaykin
      </div>
    </StyledLogo>
  );
}
