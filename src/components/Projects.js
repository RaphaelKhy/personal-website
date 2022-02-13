import { StyledProjects } from "./styles/Projects.styled";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { StyledCard } from "./styles/Card.styled";
import TechStack from "./TechStack";
import PortfolioVisualizerLight from "../static/images/PortfolioVisualizerLight.png";
import ToolTip from "./ToolTip";

export default function Projects(props) {
  return (
    <StyledProjects id="projects" isTransition={props.isTransition}>
      <h1 className="title">Projects</h1>
      {projectData.map((project) => (
        <div id="project">
          <h2 id="projectTitle">{project.title}</h2>
          <StyledCard isTransition={props.isTransition}>
            <div id="text">
              <p>{project.description}</p>
              <TechStack
                technologies={project.techStack}
                isTransition={props.isTransition}
              />
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
            <div id="projectImage">
              <a href={project.link} target="_blank">
                <img src={project.image} />
              </a>
            </div>
          </StyledCard>
        </div>
      ))}
    </StyledProjects>
  );
}

const projectData = [
  {
    title: "Portflio Visualizer",
    description:
      "A single page web application to create and backtest custom stock portfolios.",
    techStack: ["JavaScript", "Bootstrap", "D3.js", "jQuery"],
    link: "https://raphaelkhy.github.io/",
    gitHubLink: "https://github.com/RaphaelKhy/RaphaelKhy.github.io",
    image: PortfolioVisualizerLight,
  },
];
