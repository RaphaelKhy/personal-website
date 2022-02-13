import { StyledExperience } from "./styles/Experience.styled";
import { StyledCard } from "./styles/Card.styled";
import TechStack from "./TechStack";
import IvyScopeLogo from "../static/images/IvyScope.png";

export default function Experience(props) {
  return (
    <StyledExperience id="experience" isTransition={props.isTransition}>
      <h1 id="title">Experience</h1>
      {experienceData.map((company) => (
        <StyledCard isTransition={props.isTransition}>
          <div id="container">
            <div id="company">
              <div id="name">
                <a href={company.link} target="blank">
                  <img src={company.logo} />
                </a>
                <a href={company.link} target="blank">
                  <h2>{company.name}</h2>
                </a>
              </div>
              <div id="dates">{company.dates}</div>
            </div>
            <div id="body">
              <h2 id="role">{company.role}</h2>
              {company.body.map((content) => (
                <p>{content}</p>
              ))}
              <TechStack
                technologies={company.techStack}
                isTransition={props.isTransition}
              />
            </div>
          </div>
        </StyledCard>
      ))}
    </StyledExperience>
  );
}

const experienceData = [
  {
    logo: IvyScopeLogo,
    name: "IvyScope",
    link: "https://ivyscope.io/",
    dates: "Sep 2021 - Present",
    role: "Front-End Developer",
    body: [
      "Worked at a startup to build a platform for students to schedule and host college tours online.",
      "Developed webpages in React using mobile first design.",
    ],
    techStack: ["React", "SASS", "Heroku", "Material UI"],
  },
];
