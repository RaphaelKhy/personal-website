import { StyledExperience } from "./styles/Experience.styled";
import { StyledCard } from "./styles/Card.styled";
import TechStack from "./TechStack";
import IvyScopeLogo from "../static/images/IvyScope.png";

export default function Experience() {
  return (
    <StyledExperience id="experience">
      <h1 id="title">Experience</h1>
      {experienceData.map((company) => (
        <StyledCard>
          <div id="container">
            <div id="Company">
              <div id="CompanyName">
                <img src={company.logo} />
                <h2>{company.name}</h2>
              </div>
              <div id="dates">{company.dates}</div>
            </div>
            <div id="body">
              <h2 id="role">{company.role}</h2>
              {company.body.map((content) => (
                <p>{content}</p>
              ))}
              <TechStack technologies={company.techStack} />
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
      "Worked with a small team to build a platform for students to schedule and host college tours online.",
      "Developed webpages in React using mobile first design.",
    ],
    techStack: ["React", "Material UI", "SASS", "Heroku"],
  },
];
