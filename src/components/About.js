import { StyledAbout } from "./styles/About.styled";
import { HandleClick } from "./Menu";

export default function About({ isTransition }) {
  return (
    <StyledAbout id="about" isTransition={isTransition}>
      <div className="aboutMeText">
        <h1 id="name">Hi, I'm Raphael.</h1>
        <p>
          I'm a software engineer bassed in New York City. I love building{" "}
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
