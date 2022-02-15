import { FiGithub, FiExternalLink } from "react-icons/fi";
import { StyledCard } from "./styles/Card.styled";
import TechStack from "./TechStack";
import PortfolioVisualizerDark from "../static/images/Portfolio Visualizer Dark Theme.png";
import ToolTip from "./ToolTip";
import { StyledProjects } from "./styles/Projects.styled";

export default function Projects(props) {
  return (
    <StyledProjects isTransition={props.isTransition} id="projects">
      <h1 className="title">Projects</h1>
      <div id="projectCards">
        {projectData.map((project) => (
          <StyledCard isTransition={props.isTransition}>
            <div id="project">
              <a id="projectImage" href={project.link} target="_blank">
                <img src={project.image} />
              </a>
              <div id="body">
                <div id="header">
                  <h2 id="projectTitle">
                    <a href={project.link} target="_blank">
                      {project.title}
                    </a>
                  </h2>
                  <div id="links">
                    <ToolTip
                      text="GitHub"
                      content={
                        <a href={project.gitHubLink} target="_blank">
                          <FiGithub size={20}></FiGithub>
                        </a>
                      }
                    ></ToolTip>
                    <ToolTip
                      text="External Link"
                      content={
                        <a href={project.link} target="_blank">
                          <FiExternalLink size={20}></FiExternalLink>
                        </a>
                      }
                    ></ToolTip>
                  </div>
                </div>
                <div id="text">
                  <TechStack
                    technologies={project.techStack}
                    isTransition={props.isTransition}
                  />
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </StyledCard>
        ))}
      </div>
    </StyledProjects>
  );
}

const projectData = [
  {
    title: "Portflio Visualizer",
    description:
      "An analytics tool to backtest custom stock portfolios. Provides key performance statistics such as historical return, max drawdown, and percent allocation.",
    techStack: ["JavaScript", "Bootstrap", "jQuery", "D3.js"],
    link: "https://raphaelkhy.github.io/",
    gitHubLink: "https://github.com/RaphaelKhy/RaphaelKhy.github.io",
    image: PortfolioVisualizerDark,
  },
  {
    title: "Personal Website",
    description: "A website to share my experience, projects, and interests.",
    techStack: ["React", "Styed Components", "Tippy.js"],
    link: "https://raphaelkhaykin.com",
    gitHubLink: "https://github.com/RaphaelKhy/Personal-website",
  },
];
