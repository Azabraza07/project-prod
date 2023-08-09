import React from "react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "../Button/Button";
import cn from "classnames";

const LangToggle = () => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <>
      <Button onClick={toggle} theme={ThemeButton.CLEAR}>
        {t("Сменить язык")}
      </Button>
      <div>{t("Руский")}</div>
    </>
  );
};

export default LangToggle;
