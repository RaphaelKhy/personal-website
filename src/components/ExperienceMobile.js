import { StyledExperienceMobile } from "./styles/ExperienceMobile.styled.";
import { StyledCard } from "./styles/Card.styled";
import TechStack from "./TechStack";

export default function ExperienceMobile(props) {
  return (
    <StyledExperienceMobile id="experience" isTransition={props.isTransition}>
      <h2 id="title">Experience</h2>
      <div id="experienceCards">
        {experienceList.map((company) => (
          <StyledCard isTransition={props.isTransition}>
            <div id="container">
              <h2 id="role">
                {company.role}
                <div id="at-sign">&nbsp;@&nbsp;</div>
                <a id="company" href={company.link} target="blank">
                  {company.name}
                </a>
              </h2>
              <div id="body">
                <div id="dates">{company.dates}</div>
                {company.body.map((content) => (
                  <li className="description">{content}</li>
                ))}
              </div>
              <TechStack
                technologies={company.techStack}
                isTransition={props.isTransition}
              />
            </div>
          </StyledCard>
        ))}
      </div>
    </StyledExperienceMobile>
  );
}

const experienceList = [
  {
    name: "IvyScope",
    link: "https://ivyscope.io/",
    dates: "September 2021 - January 2022",
    role: "Front-End Software Engineer",
    body: [
      "Worked at a startup to build a platform for students to schedule and host college tours online.",
      "Developed webpages in React using mobile first design.",
    ],
    techStack: ["React", "SASS", "Heroku", "Material UI"],
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/about?lang=en",
    dates: "June 2022 - August 2022",
    role: "Incoming Software Engineer Intern",
    body: ["Will be working on the content creation and consumption team."],
    techStack: [],
  },
];
