import React, { useContext } from 'react'

import { Squash as Hamburger } from 'hamburger-react'

import { themeTransitionContext } from '../../../App'
import { handleNavClick } from '../../../hooks/handleNavClick'
import { StyledMobileMenu } from '../style'
import { ThemeButton } from './themeButton'

export default function MobileMenu(props) {
  const { handleToggle, isMobileMenuActive, setIsMobileMenuActive } = props
  const isTransition = useContext(themeTransitionContext)

  return (
    <StyledMobileMenu isTransition={isTransition}>
      <ThemeButton handleToggle={handleToggle} isTransition={isTransition} />
      <Hamburger
        id="hamburger"
        duration={'0.3'}
        direction={'left'}
        toggled={isMobileMenuActive}
        toggle={setIsMobileMenuActive}
      />
      <nav className={'mobile-nav ' + (isMobileMenuActive ? 'is-active' : null)}>
        <a href="/#experience" onClick={handleNavClick}>
          Experience
        </a>
        <a href="/#projects" onClick={handleNavClick}>
          Projects
        </a>
        <a href="/#contact" onClick={handleNavClick}>
          Contact
        </a>
      </nav>
    </StyledMobileMenu>
  )
}
