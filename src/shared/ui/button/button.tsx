import type { ReactNode } from "react";
import styles from "./button.module.scss";

type Props = {
  children: ReactNode;
  variant: "primary" | "secondary" | "danger";
};

export const Button = ({ children, variant = "primary" }: Props) => {
  // Динамически выбираем класс в зависимости от variant
  const buttonClass = `${styles.button} ${styles[`button--${variant}`]}`;

  return <button className={buttonClass}>{children}</button>;
};
