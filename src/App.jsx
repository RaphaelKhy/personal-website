import { createContext, useState } from 'react'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './components/styles/Global'
import { darkTheme, lightTheme } from './components/styles/Themes'
import { Body } from './views/Body'
import { Header } from './views/Header'

export const themeTransitionContext = createContext()

// index.html reads the saved theme before first paint (guarded) and sets data-theme
const initialTheme = () =>
  document.documentElement.dataset.theme === 'dark' ? darkTheme : lightTheme

const saveTheme = (name) => {
  try {
    localStorage.setItem('theme', name)
  } catch (e) {
    // Storage is blocked: the toggle still works, it just isn't remembered
  }
}

const App = () => {
  const [theme, setTheme] = useState(initialTheme)
  const [isTransition, setIsTransition] = useState(false)

  const handleToggle = () => {
    const next = theme === lightTheme ? darkTheme : lightTheme
    setTheme(next)
    setIsTransition(true)
    setTimeout(() => {
      setIsTransition(false)
    }, 500)
    saveTheme(next === darkTheme ? 'dark' : 'light')
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
