import { useContext } from 'react'

import { themeTransitionContext } from '../../App'
import { Card } from '../../components/Card'
import { Tags } from '../../components/Tags'
import { Body, StyledExperience } from './style'

export const Experience = () => {
  const isTransition = useContext(themeTransitionContext)

  return (
    <StyledExperience id="experience" isTransition={isTransition}>
      <h2 id="title">Experience</h2>
      <div id="experienceCards">
        {experienceList.map((company, index) => (
          <Card
            key={index}
            children={
              <div id="container">
                <h2 id="role">
                  <div>{company.role}</div>
                  <div id="at-sign">&nbsp;@&nbsp;</div>
                  <a id="company" href={company.link} target="blank">
                    {company.organization}
                  </a>
                </h2>
                <Body hasContent={company.body.length > 0}>
                  <div id="dates">{company.dates}</div>
                  {company.body.map((content, i) => (
                    <li key={i} className="description">
                      {content}
                    </li>
                  ))}
                </Body>
                <Tags technologies={company.tags} isTransition={isTransition} />
              </div>
            }
          />
        ))}
      </div>
    </StyledExperience>
  )
}

const experienceList = [
  {
    organization: 'TikTok',
    link: 'https://www.tiktok.com/about?lang=en',
    dates: 'June 2023 - Present',
    role: 'Software Engineer',
    body: ['Data Access team'],
    tags: ['Golang']
  },
  {
    organization: 'TikTok',
    link: 'https://www.tiktok.com/about?lang=en',
    dates: 'May 2022 - Aug 2022',
    role: 'Software Engineer Intern',
    body: [
      'Developed a service to improve testing workflow and increase developer productivity. This service provides read access to over 90% of TikTok’s online data and is accessible via CLI commands and a Web UI.',
      'Configured a continuous deployment pipeline to automate deployment for testing service. It handles compilation and deployment across all online regions.'
    ],
    tags: ['Golang']
  },
  {
    organization: 'IvyScope',
    link: 'https://www.linkedin.com/company/ivyscope/',
    dates: 'Sep 2021 - Dec 2021',
    role: 'Front-End Software Engineer',
    body: [
      'Built a platform for students to schedule and host college tours online.',
      'Developed webpages in React using mobile first design.'
    ],
    tags: ['React', 'SASS', 'Heroku', 'Gatsby']
  }
]
