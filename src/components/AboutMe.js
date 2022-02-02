import { StyledAboutMe } from "./styles/AboutMe.styled";

export default function AboutMe() {
  return (
    <StyledAboutMe id="about">
      <div className="aboutMeText">
        <h1>Hi, I'm Raphael Khaykin.</h1>
        <p>
          I'm a Software Engineer bassed in New York City. I’m currently
          studying Information Systems at Stony Brook University.
        </p>
      </div>
      <div className="aboutMeImage">
        <img src={require("./static/images/Profile.jpg")} />
      </div>
    </StyledAboutMe>
  );
}
