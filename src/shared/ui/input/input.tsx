import type { InputHTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./input.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = ({ className, ...props }: Props) => {
  return <input {...props} className={clsx(styles.input, className)} />;
};
