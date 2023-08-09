import React from "react";
import styles from "./PageLoader.module.scss";
import cn from "classnames";
import { Loader } from "widgets/Loader";

const PageLoader = () => {
  return (
    <div className={cn(styles.pageLoader, {}, [])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
