import { StyledAbout } from "./styles/About.styled";
import { HandleClick } from "./Menu";

export default function About(props) {
  return (
    <StyledAbout id="about" isTransition={props.isTransition}>
      <div className="aboutMeText">
        <h1>Hi, I'm Raphael</h1>
        <p>
          I'm a Software Engineer based in New York City. I'm currently studying
          Information Systems at Stony Brook University. You can see some of my
          projects{" "}
          <a href="/#projects" onClick={HandleClick}>
            here
          </a>{" "}
          or more on my{" "}
          <a href="https://github.com/RaphaelKhy" target="blank">
            GitHub
          </a>
          .
        </p>
      </div>
    </StyledAbout>
  );
}
