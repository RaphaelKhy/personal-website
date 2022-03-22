import { StyledMenu } from "./style";
import resume from "../../static/Resume.pdf";
import { ThemeButton } from "./themeButton";

export default function Menu({ isTransition, handleToggle }) {
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
      <ThemeButton
        handleToggle={handleToggle}
        isTransition={isTransition}
      ></ThemeButton>
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
