import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Card } from "../../components/Card";
import { Tags } from "../../components/Tags";
import PortfolioVisualizerDark from "../../static/portfolio-visualizer.png";
import ToolTip from "../../components/ToolTip";
import { StyledProjects } from "./style";
import { themeTransitionContext } from "../../App";
import { useContext } from "react";

const Projects = () => {
  const isTransition = useContext(themeTransitionContext);

  return (
    <StyledProjects isTransition={isTransition} id="projects">
      <h2 className="title">Projects</h2>
      <div id="projectCards">
        {projectList.map((project, index) => (
          <Card
            key={index}
            children={
              <div id="project">
                <a
                  id="projectImage"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={project.image} alt="" />
                </a>
                <div id="body">
                  <div id="header">
                    <h2 id="projectTitle">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        {project.title}
                      </a>
                    </h2>
                    <div id="links">
                      <ToolTip
                        text="GitHub"
                        delay="300"
                        content={
                          <a
                            href={project.gitHubLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FiGithub size={20} />
                          </a>
                        }
                      />
                      <ToolTip
                        text="External Link"
                        delay="300"
                        content={
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FiExternalLink size={20} />
                          </a>
                        }
                      />
                    </div>
                  </div>
                  <div id="text">
                    <p className="description">{project.description}</p>
                    <Tags
                      technologies={project.tags}
                      isTransition={isTransition}
                    />
                  </div>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </StyledProjects>
  );
};

const projectList = [
  {
    title: "Portfolio Visualizer",
    description:
      "An analytics tool to backtest custom stock portfolios. Provides key performance statistics such as historical return, max drawdown, and percent allocation.",
    tags: ["JavaScript", "Bootstrap", "jQuery", "D3.js"],
    link: "https://raphaelkhy.github.io/Portfolio-Visualizer/",
    gitHubLink: "https://github.com/RaphaelKhy/Portfolio-Visualizer",
    image: PortfolioVisualizerDark,
  },
  {
    title: "Personal Website",
    description: "A website to share my experience, projects, and interests.",
    tags: ["React", "Styed Components", "Framer Motion", "Tippy.js"],
    link: "https://raphaelkhaykin.com",
    gitHubLink: "https://github.com/RaphaelKhy/Personal-website",
  },
];

export { Projects };
