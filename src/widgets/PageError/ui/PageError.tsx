import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./PageError.module.scss";

const PageError = () => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={styles.pageError}>
      <h1>{t("Произошла ошибка")}</h1>
      <button className={styles.button} onClick={reloadPage}>
        {t("Обновить страницу")}
      </button>
    </div>
  );
};

export default PageError;
