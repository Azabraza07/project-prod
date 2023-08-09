import cn from "classnames";
import styles from "./SideBar.module.scss";
import { useState } from "react";
import { ThemeToggle } from "shared/ui/ThemeToggle/ThemeToggle";
import LangToggle from "shared/ui/LangToggle/LangToggle";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={cn(styles.sidebar, { [styles.collapsed]: collapsed })}>
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeToggle />
        <LangToggle />
      </div>
    </div>
  );
};

export default Sidebar;
