import { useContext } from 'react'

import { themeTransitionContext } from '../../App'
import { handleNavClick } from '../../hooks/handleNavClick.js'
import { StyledAbout } from './style.js'

const About = () => {
  const isTransition = useContext(themeTransitionContext)
  return (
    <StyledAbout id="about" isTransition={isTransition}>
      <div className="aboutMeText">
        <h1 id="name">Hi, I'm Raphael</h1>
        <p>
          I'm a software engineer at TikTok. I love building {' '}
          <a href="/#projects" onClick={handleNavClick}>
            projects
          </a>{', '}
          exploring new tech, and sharing ideas. Welcome to my corner of the web!
        </p>
      </div>
    </StyledAbout>
  )
}

export { About }
