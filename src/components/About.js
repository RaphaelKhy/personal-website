import { StyledAbout } from "./styles/About.styled";
import { HandleClick } from "./Menu";

export default function About(props) {
  return (
    <StyledAbout id="about" isTransition={props.isTransition}>
      <div className="aboutMeText">
        <h1 id="name">Raphael Khaykin</h1>
        <h1 id="title">Software Engineer</h1>
        <p>
          I'm currently studying Information Systems at Stony Brook University.
          You can see some of my projects{" "}
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
