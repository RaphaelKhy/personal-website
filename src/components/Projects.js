import { StyledProjects } from "./styles/Projects.styled";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <StyledProjects id="projects">
      <h1 className="title">Projects</h1>
      <div id="project">
        <h2 id="projectTitle">Portflio Visualizer</h2>
        <div id="projectBody">
          <div id="projectText">
            <div id="projectDescription">
              <p>
                A single page web application to create and backtest custom stock
                portfolios.
              </p>
            </div>
            <div id="technologies">
              <p>JavaScript</p>
              <p>Bootstrap</p>
              <p>D3.js</p>
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
            <img
              id="image"
              src={require("../images/Portfolio Visualizer.png")}
            />
          </div>
        </div>
      </div>
    </StyledProjects>
  );
}
