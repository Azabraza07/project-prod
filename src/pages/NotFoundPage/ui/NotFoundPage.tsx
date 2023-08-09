import React from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import styles from "./NotFoundPage.module..scss";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.notFoundPage, {}, [])}>
      {t("Страница не существует")}
    </div>
  );
};

export default NotFoundPage;
