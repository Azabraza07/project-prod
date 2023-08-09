import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.navbar}>
      <div className={styles.links_block}>
        <AppLink className={styles.link} to="/">
          {t("Главная")}
        </AppLink>
        <AppLink className={styles.link} to="/about">
          {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};
