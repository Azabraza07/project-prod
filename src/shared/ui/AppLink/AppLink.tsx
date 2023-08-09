import React, { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
interface AppLinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children: React.ReactNode;
  to: string;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { className, theme, children, to, ...otherProps } = props;
  return (
    <Link className={cn({}, [className])} to={to} {...otherProps}>
      {children}
    </Link>
  );
};

export default AppLink;
