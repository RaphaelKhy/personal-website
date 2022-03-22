import { StyledExperienceMobile } from "./style";
import { StyledCard } from "../../components/styles/Card.styled";
import { TechStack } from "../../components/TechStack";
import { motion } from "framer-motion";

export default function Experience({ isTransition }) {
  return (
    <StyledExperienceMobile id="experience" isTransition={isTransition}>
      <h2 id="title">Experience</h2>
      <div id="experienceCards">
        {experienceList.map((company, index) => (
          <StyledCard
            isTransition={isTransition}
            key={index}
            as={motion.div}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 10,
              mass: 0.75,
            }}
            viewport={{ once: true }}
          >
            <div id="container">
              <h2 id="role">
                <div>{company.role}</div>
                <div id="at-sign">&nbsp;@&nbsp;</div>
                <a id="company" href={company.link} target="blank">
                  {company.name}
                </a>
              </h2>
              <div id="body">
                <div id="dates">{company.dates}</div>
                {company.body.map((content, i) => (
                  <li key={i} className="description">
                    {content}
                  </li>
                ))}
              </div>
              <TechStack
                technologies={company.techStack}
                isTransition={isTransition}
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
      "Built a platform for students to schedule and host college tours online.",
      "Developed webpages in React using mobile first design.",
    ],
    techStack: ["React", "SASS", "Heroku", "Material UI"],
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/about?lang=en",
    dates: "June 2022 - August 2022",
    role: "Incoming Software Engineer Intern",
    body: [],
    techStack: [],
  },
];