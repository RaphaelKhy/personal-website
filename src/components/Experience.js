import { StyledExperiene } from "./styles/Experience.styled";

export default function Experience() {
  return (
    <StyledExperiene id="experience">
      <h1 className="title">Experience</h1>
      <div id="experienceBody">
        <div id="IvyScope">
          <div id="IvyScopeTitle">
            <h2>
              <img src={require("../images/IvyScope.ico")} />
              IvyScope
            </h2>
            <p>September 2021 - Present</p>
          </div>
          <div id="IvyScopeBody">
            <h3 id="IvyScopeBodyTitle">Front-End Developer</h3>
            <ul>
              <li>
                Worked with a small team to build a platform for students to
                schedule and host college tours online.
              </li>
              <li>Developed webpages in React using mobile first design.</li>
            </ul>
            <p id="Technologies"> Technologies: React, Material UI, SASS, Heroku</p>
          </div>
        </div>
      </div>
    </StyledExperiene>
  );
}
