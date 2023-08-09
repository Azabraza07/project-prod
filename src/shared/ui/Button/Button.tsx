import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, theme, ...otherProps } = props;
  return (
    <button
      className={cn(styles.button, styles[theme], styles[className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
