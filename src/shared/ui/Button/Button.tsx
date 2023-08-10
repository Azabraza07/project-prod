import { type ReactNode, type ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  theme?: ThemeButton
}

export const Button = (props: ButtonProps) => {
  const { children, className, theme, ...otherProps } = props
  return (
    <button
      className={cn(styles.button, theme && styles[theme], className)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
