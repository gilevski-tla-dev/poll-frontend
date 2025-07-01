import type { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import styles from "./button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "disabled";
  className?: string;
};

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, styles[`button--${variant}`], className)}
    >
      {children}
    </button>
  );
};
