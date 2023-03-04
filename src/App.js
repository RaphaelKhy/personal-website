import { createContext, useEffect, useState } from 'react'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './components/styles/Global'
import { darkTheme, lightTheme } from './components/styles/Themes'
import { Body } from './views/Body'
import { Header } from './views/Header'

export const themeTransitionContext = createContext()

const App = () => {
  const [theme, setTheme] = useState(lightTheme)
  const [isTransition, setIsTransition] = useState(false)

  // Store theme in local Storage
  useEffect(() => {
    if ('theme' in localStorage) {
      let theme = localStorage.getItem('theme')
      theme === 'light' ? setTheme(lightTheme) : setTheme(darkTheme)
    } else {
      localStorage.setItem('theme', 'light')
    }
  }, [])

  const handleToggle = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
    setIsTransition(true)
    setTimeout(() => {
      setIsTransition(false)
    }, 500)
    localStorage.setItem('theme', theme === lightTheme ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme}>
      <themeTransitionContext.Provider value={isTransition}>
        <GlobalStyle isTransition={isTransition} />
        <Header handleToggle={handleToggle} />
        <Body />
      </themeTransitionContext.Provider>
    </ThemeProvider>
  )
}

export default App
