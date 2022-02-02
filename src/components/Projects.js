import { StyledProjects } from "./styles/Projects.styled";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { StyledProjectCard } from "./styles/ProjectCard.styled";

export default function Projects() {
  return (
    <StyledProjects id="projects">
      <h1 className="title">Projects</h1>
      <div id="project">
        <h2 id="projectTitle">Portflio Visualizer</h2>
        <StyledProjectCard>
          <div id="projectText">
            <div id="projectDescription">
              <p>
                A single page web application to create and backtest custom
                stock portfolios.
              </p>
            </div>
            <div id="technologies">
              <p>JavaScript</p>
              <p>Bootstrap</p>
              <p>D3.js</p>
              <p>jQuery</p>
            </div>
            <a
              href="https://github.com/RaphaelKhy/RaphaelKhy.github.io"
              target="_blank"
            >
              <FiGithub size={20}></FiGithub>
            </a>
            <a href="https://raphaelkhy.github.io/" target="_blank">
              <FiExternalLink size={20}></FiExternalLink>
            </a>
          </div>
          <div id="PortfolioVisualizerImage">
            <a href="https://raphaelkhy.github.io/" target="_blank">
              <img
                id="image"
                src={require("./static/images/PortfolioVisualizerLight.png")}
              />
            </a>
          </div>
        </StyledProjectCard>
      </div>
    </StyledProjects>
  );
}
