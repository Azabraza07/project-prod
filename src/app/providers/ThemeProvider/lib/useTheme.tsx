import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface useThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): useThemeResult {
  const themeContext = useContext(ThemeContext)

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!themeContext) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  const { theme, setTheme } = themeContext

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    if (setTheme != null) {
      setTheme(newTheme)
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return { theme, toggleTheme }
}
