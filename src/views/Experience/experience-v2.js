import { StyledExperience } from "../../components/styles/Experience.styled";
import { StyledCard } from "../../components/styles/Card.styled";
import { TechStack } from "../../components/TechStack";
import IvyScopeLogo from "../static/ivyscope.png";
import TikTokLogo from "../static/tiktok-logo.png";

export default function Experience(props) {
  return (
    <StyledExperience id="experience" isTransition={props.isTransition}>
      <h2 id="title">Experience</h2>
      <div id="experienceCards">
        {experienceList.map((company) => (
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
                  <p className="description">{content}</p>
                ))}
                <TechStack
                  technologies={company.techStack}
                  isTransition={props.isTransition}
                />
              </div>
            </div>
          </StyledCard>
        ))}
      </div>
    </StyledExperience>
  );
}

const experienceList = [
  {
    logo: IvyScopeLogo,
    name: "IvyScope",
    link: "https://ivyscope.io/",
    dates: "Sep 2021 - Jan 2022",
    role: "Front-End Software Engineer",
    body: [
      "Worked at a startup to build a platform for students to schedule and host college tours online.",
      "Developed webpages in React using mobile first design.",
    ],
    techStack: ["React", "SASS", "Heroku", "Material UI"],
  },
  {
    logo: TikTokLogo,
    name: "TikTok",
    link: "https://www.tiktok.com/about?lang=en",
    dates: "Jun 2022 - Aug 2022",
    role: "Incoming Software Engineer Intern",
    body: ["Will be working on the content creation and consumption team."],
    techStack: [],
  },
];