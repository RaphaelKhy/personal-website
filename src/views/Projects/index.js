import { useContext } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

import { themeTransitionContext } from '../../App'
import { Card } from '../../components/Card'
import { Tags } from '../../components/Tags'
import ToolTip from '../../components/ToolTip'
import PortfolioVisualizerDark from '../../static/portfolio-visualizer.png'
import { StyledProjects } from './style'

const Projects = () => {
  const isTransition = useContext(themeTransitionContext)

  return (
    <StyledProjects isTransition={isTransition} id="projects">
      <h2 className="title">Projects</h2>
      <div id="projectCards">
        {projectList.map((project, index) => (
          <Card
            key={index}
            children={
              <div id="project">
                <a id="projectImage" href={project.link} target="_blank" rel="noreferrer">
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
                      {project.gitHubLink && (
                        <ToolTip
                          text="GitHub"
                          delay="300"
                          content={
                            <a href={project.gitHubLink} target="_blank" rel="noreferrer">
                              <FiGithub size={20} />
                            </a>
                          }
                        />
                      )}

                      <ToolTip
                        text="External Link"
                        delay="300"
                        content={
                          <a href={project.link} target="_blank" rel="noreferrer">
                            <FiExternalLink size={20} />
                          </a>
                        }
                      />
                    </div>
                  </div>
                  <div id="text">
                    <p className="description">{project.description}</p>
                    <Tags technologies={project.tags} isTransition={isTransition} />
                  </div>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </StyledProjects>
  )
}

const projectList = [
  {
    title: 'Investment Visual',
    description: 'A website to backtest and analyze investment portfolios.',
    tags: ['React', 'Next.js', 'Typescript', 'Ant Design', 'PostgreSQL', 'Python'],
    link: 'https://main.d3f3u7l8egl9c.amplifyapp.com/'
  },
  {
    title: 'Portfolio Visualizer',
    description:
      'An analytics tool to backtest custom stock portfolios. Provides key performance statistics such as historical return, max drawdown, and percent allocation.',
    tags: ['JavaScript', 'Bootstrap', 'jQuery', 'D3.js'],
    link: 'https://raphaelkhy.github.io/portfolio-visualizer/',
    gitHubLink: 'https://github.com/RaphaelKhy/Portfolio-Visualizer',
    image: PortfolioVisualizerDark
  },
  {
    title: 'Personal Website',
    description: 'A website to share my experience, projects, and interests.',
    tags: ['React', 'Styed Components', 'Framer Motion'],
    link: 'https://raphaelkhaykin.com',
    gitHubLink: 'https://github.com/RaphaelKhy/Personal-website'
  }
]

export { Projects }
