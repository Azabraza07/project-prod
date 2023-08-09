import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { Button, ThemeButton } from "../Button/Button";
import SunBlackIcon from "shared/assets/icons/sun.black.svg";
import SunYellowIcon from "shared/assets/icons/sun.yellow.svg";
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
      {theme === Theme.DARK ? <SunBlackIcon /> : <SunYellowIcon />}
      Button
      {/* <ThemeToggleUI /> */}
    </Button>
  );
};
