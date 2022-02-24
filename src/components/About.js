import { StyledAbout } from "./styles/About.styled";
import { HandleClick } from "./Menu";

export default function About(props) {
  return (
    <StyledAbout id="about" isTransition={props.isTransition}>
      <div className="aboutMeText">
        <h1 id="name">Hi, I'm Raphael.</h1>
        <p>
          I'm a software engineer bassed in New York. I love building{" "}
          <a href="/#projects" onClick={HandleClick}>
            projects
          </a>{" "}
          and learning new technologies. I'm currently studying Information
          Systems at Stony Brook University.
        </p>
      </div>
    </StyledAbout>
  );
}
