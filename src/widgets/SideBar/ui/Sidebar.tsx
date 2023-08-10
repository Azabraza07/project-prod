import cn from 'classnames'
import styles from './SideBar.module.scss'
import { useState } from 'react'
import { ThemeToggle } from 'shared/ui/ThemeToggle/ThemeToggle'
import LangToggle from 'shared/ui/LangToggle/LangToggle'
import MenuIcon from 'shared/assets/icons/menu.svg'
import MainPageIcon from 'shared/assets/icons/MainPageIcon.svg'
import AboutPageIcon from 'shared/assets/icons/aboutPageIcon.svg'
import AppLink from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const { t } = useTranslation()
  const location = useLocation()

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div className={cn(styles.sidebar, { [styles.collapsed]: collapsed })}>
      <button className={cn(styles.menu)} onClick={onToggle}>
        <MenuIcon />
      </button>

      <div className={cn(styles.menu_navigation, {}, [])}>
        <AppLink
          className={cn(styles.item, {
            [styles.active]: location.pathname === RoutePath.main
          })}
          to={RoutePath.main}
        >
          <MainPageIcon className={styles.icon} />
          <span className={cn(styles.link)}>{t('Главная')}</span>
        </AppLink>

        <AppLink
          className={cn(styles.item, {
            [styles.active]: location.pathname === RoutePath.about
          })}
          to={RoutePath.about}
        >
          <AboutPageIcon className={styles.icon} />
          <span className={cn(styles.link)}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeToggle />
        <LangToggle collapsed={collapsed} />
      </div>
    </div>
  )
}

export default Sidebar
