import { Theme, useTheme } from 'app/providers/ThemeProvider'
import cn from 'classnames'
import styles from './ThemeToggle.module.scss'
import SunBlackIcon from 'shared/assets/icons/sun.black.svg'
import SunYellowIcon from 'shared/assets/icons/sun.yellow.svg'
import { Button } from '../Button/Button'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button className={cn(styles.themeToggle)} onClick={toggleTheme} >
      {theme === Theme.DARK ? <SunBlackIcon /> : <SunYellowIcon />}
    </Button>
  )
}
