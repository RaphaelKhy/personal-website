import { StyledExperience } from "./styles/Experience.styled";
import { StyledProjectCard } from "./styles/ProjectCard.styled";

export default function Experience() {
  return (
    <StyledExperience id="experience">
      <h1 id="title">Experience</h1>
      <StyledProjectCard id="experienceBody">
        <div id="IvyScope">
          <div id="Company">
            <div id="CompanyName">
              <a href="https://ivyscope.io/" target="blank">
                <img src={require("./static/images/IvyScope.png")} />
              </a>
              <h2>IvyScope</h2>
            </div>
            <div id="CompanyDates">September 2021 - Present</div>
          </div>
          <div id="ExperienceBody">
            <h2 id="ExperienceTitle">Front-End Developer</h2>
            <div id="ExperienceBody">
              <p>
                Worked with a small team to build a platform for students to
                schedule and host college tours online.
              </p>
              <p>Developed webpages in React using mobile first design.</p>
              <div id="technologies">
                <p>React</p>
                <p>Material UI</p>
                <p>SASS</p>
                <p>Heroku</p>
              </div>
            </div>
          </div>
        </div>
      </StyledProjectCard>
    </StyledExperience>
  );
}
