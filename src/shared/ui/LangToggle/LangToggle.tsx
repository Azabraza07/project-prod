import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '../Button/Button'
import cn from 'classnames'
import styles from './LangToggle.module.scss'
import IconRU from 'shared/assets/icons/ru.svg'
import IconEN from 'shared/assets/icons/en.svg'
import { type FC } from 'react'

interface LangToggleProps {
  collapsed: boolean
}

const LangToggle: FC<LangToggleProps> = (props) => {
  const { collapsed } = props
  const { t, i18n } = useTranslation()

  const toggle = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <>
      <Button className={cn(styles.lang)} onClick={toggle} theme={ThemeButton.CLEAR}>
        {i18n.language === 'ru' ? <IconRU /> : <IconEN />}
      </Button>
      <div>{t(collapsed ? 'Короткий язык' : 'Руский')}</div>
    </>
  )
}

export default LangToggle
