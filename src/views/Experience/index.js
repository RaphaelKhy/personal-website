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
                  {company.body.length > 0 && (
                    <ul className="experience-list">
                      {company.body.map((content, i) => (
                        <li key={i} className="description">
                          {content}
                        </li>
                      ))}
                    </ul>
                  )}
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
    body: ['Server Architecture - Data & Trust Architecture'],
    tags: ['Golang', 'Kubernetes', 'Kafka', 'RocketMQ']
  },
  {
    organization: 'TikTok',
    link: 'https://www.tiktok.com/about?lang=en',
    dates: 'May 2022 - Aug 2022',
    role: 'Software Engineer Intern',
    body: ['Server Architecture - Entity & Data Access'],
    tags: ['Golang']
  }
]
