import type { ReactNode } from "react";
import styles from "./full-screen-layout.module.scss";

type Props = {
  children: ReactNode;
};

export const FullScreenLayout = ({ children }: Props) => {
  return (
    <div className={styles.app}>
      <div className={styles.layout}>{children}</div>
    </div>
  );
};
