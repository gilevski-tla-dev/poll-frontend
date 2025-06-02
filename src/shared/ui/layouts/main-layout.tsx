import type { ReactNode } from "react";
import styles from "./main-layout.module.css";
type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return <div className={styles.main_layout}>{children}</div>;
};
