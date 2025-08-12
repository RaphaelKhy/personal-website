import { useContext } from 'react'

import { themeTransitionContext } from '../../../App'
import { handleNavClick } from '../../../hooks/handleNavClick'
import { StyledMenu } from '../style'
import { ThemeButton } from './themeButton'

export default function Menu({ handleToggle }) {
  const isTransition = useContext(themeTransitionContext)

  return (
    <StyledMenu isTransition={isTransition}>
      <a href="/#experience" onClick={handleNavClick}>
        Experience
      </a>
      <a href="/#projects" onClick={handleNavClick}>
        Projects
      </a>
      <a href="/#contact" onClick={handleNavClick}>
        Contact
      </a>
      <ThemeButton handleToggle={handleToggle} isTransition={isTransition} />
    </StyledMenu>
  )
}
