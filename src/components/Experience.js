import { StyledExperience } from "./styles/Experience.styled";
import { StyledCard } from "./styles/Card.styled";
import TechStack from "./TechStack";
import IvyScopeLogo from "../static/images/IvyScope.png";
import TikTokLogo from "../static/images/TikTok_logo.png";


export default function Experience(props) {
  return (
    <StyledExperience id="experience" isTransition={props.isTransition}>
      <h2 id="title">Where I’ve Worked</h2>
      <div id="experienceCards">
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
      </div>
    </StyledExperience>
  );
}

const experienceData = [
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
    body: [
      "Will be working on the content creation and consumption team.",
    ],
    techStack: [],
  },
];
