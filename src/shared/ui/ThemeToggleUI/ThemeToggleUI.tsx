import { FC } from "react";
import styles from "./ThemeToggleUI.module.scss";
import cn from "classnames";

export interface ThemeToggleUIProps {}

export const ThemeToggleUI: FC<ThemeToggleUIProps> = () => {
  return (
    <label className={cn(styles.container, {}, [])}>
      <input type="checkbox" />
      <div />
    </label>
  );
};
