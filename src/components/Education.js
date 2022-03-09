import { StyledEducation } from "./styles/Education.styled";
import { StyledCard } from "./styles/Card.styled";
import IvyScopeLogo from "../static/images/sbu_logo.png";

export default function Education({ isTransition }) {
  return (
    <StyledEducation id="education" isTransition={isTransition}>
      <h1 id="title">Education</h1>
      {educationData.map((school, index) => (
        <StyledCard key={index} isTransition={isTransition}>
          <div id="container">
            <div id="school">
              <div id="schoolName">
                <a href={school.link} target="blank">
                  <img src={school.logo} />
                </a>
                <a href={school.link} target="blank">
                  <h2>{school.name}</h2>
                </a>
              </div>
              <div id="dates">{school.dates}</div>
            </div>
            <div id="body">
              <h2 id="major">{school.major}</h2>
              {school.body.map((content) => (
                <p>{content}</p>
              ))}
            </div>
          </div>
        </StyledCard>
      ))}
    </StyledEducation>
  );
}

const educationData = [
  {
    logo: IvyScopeLogo,
    name: "Stony Brook University",
    link: "https://www.stonybrook.edu/",
    dates: "Aug 2019 - Expected May 2023",
    major: "Information Systems Major",
    body: [
      "Coursework: Data Structures and Algorithms, Object Oriented Programming, Computer Networks, Database Design, Computer Security, Discrete Mathematics",
    ],
  },
];
