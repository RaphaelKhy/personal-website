import { StyledEducation } from "./styles/Education.styled";
import { StyledCard } from "./styles/Card.styled";
import IvyScopeLogo from "../static/images/sbu_logo.png";

export default function Education() {
  return (
    <StyledEducation id="education">
      <h1 id="title">Education</h1>
      {educationData.map((item) => (
        <StyledCard>
          <div id="container">
            <div id="Education">
              <div id="SchoolName">
                <a href={item.compnayLink} target="blank">
                  <img src={item.logoPath} />
                </a>
                <a href={item.compnayLink} target="blank">
                  <h2>{item.schoolName}</h2>
                </a>
              </div>
              <div id="SchoolDates">{item.companyDates}</div>
            </div>
            <div id="body">
              <h2 id="major">{item.jobTitle}</h2>
              {item.body.map((c) => (
                <p>{c}</p>
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
    logoPath: IvyScopeLogo,
    schoolName: "Stony Brook University",
    compnayLink: "https://www.stonybrook.edu/",
    companyDates: "2019 - Expected May 2023",
    jobTitle: "Information Systems Major",
    body: [
      "Relevant Coursework: Data Structures and Algorithms, Object Oriented Programming, Computer Networks, Database Design, Computer Security, Discrete Mathematics",
    ],
  },
];
