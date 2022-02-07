import { StyledExperience } from "./styles/Experience.styled";
import { StyledCard } from "./styles/Card.styled";
import TechStack from "./TechStack";
import IvyScopeLogo from "../static/images/IvyScope.png";

export default function Experience() {
  return (
    <StyledExperience id="experience">
      <h1 id="title">Experience</h1>
      {experienceData.map((item) => (
        <StyledCard>
          <div id="container">
            <div id="Company">
              <div id="CompanyName">
                <img src={item.logoPath} />
                <h2>{item.companyName}</h2>
              </div>
              <div id="CompanyDates">{item.companyDates}</div>
            </div>
            <div id="body">
              <h2 id="ExperienceTitle">{item.jobTitle}</h2>
              {item.body.map((c) => (
                <p>{c}</p>
              ))}
              <TechStack technologies={item.techStack} />
            </div>
          </div>
        </StyledCard>
      ))}
    </StyledExperience>
  );
}

const experienceData = [
  {
    logoPath: IvyScopeLogo,
    companyName: "IvyScope",
    compnayLink: "https://ivyscope.io/",
    companyDates: "Sep 2021 - Present",
    jobTitle: "Front-End Developer",
    body: [
      "Worked with a small team to build a platform for students to schedule and host college tours online.",
      "Developed webpages in React using mobile first design.",
    ],
    techStack: ["React", "Material UI", "SASS", "Heroku"],
  },
];
