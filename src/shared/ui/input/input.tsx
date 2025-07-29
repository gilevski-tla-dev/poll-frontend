import { type InputHTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./input.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  error?: string;
};

export const Input = ({ className, error, ...props }: Props) => {
  return (
    <div className={styles.wrapper}>
      <input
        {...props}
        className={clsx(styles.input, className, error && styles.error)}
      />
    </div>
  );
};
