import type React from 'react'
import { type FC, useMemo, useState } from 'react'
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext
} from '../lib/ThemeContext'

interface ThemeProviderProps {
  children: React.ReactNode
}
const defaultTheme =
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
