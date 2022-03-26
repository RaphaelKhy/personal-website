import { StyledMenu } from "../style";
import resume from "../../../static/Resume.pdf";
import { ThemeButton } from "./themeButton";
import { themeTransitionContext } from "../../../App";
import { useContext } from "react";

export default function Menu({ handleToggle }) {
  const isTransition = useContext(themeTransitionContext);

  return (
    <StyledMenu isTransition={isTransition}>
      <a href="/#experience" onClick={HandleClick}>
        Experience
      </a>
      <a href="/#projects" onClick={HandleClick}>
        Projects
      </a>
      <a href="/#contact" onClick={HandleClick}>
        Contact
      </a>
      <a href={resume} target="blank">
        Resume
      </a>
      <ThemeButton handleToggle={handleToggle} isTransition={isTransition} />
    </StyledMenu>
  );
}

export const HandleClick = (e) => {
  e.preventDefault();
  var target = e.target.getAttribute("href").substring(2);
  const location = document.getElementById(target).offsetTop;
  window.scrollTo({
    left: 0,
    top: location - 65,
  });
};
