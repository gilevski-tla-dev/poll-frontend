import type { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  //TODO тут будут пропсы
};

export const Input = ({ ...props }: Props) => {
  return <input {...props} className={styles.input} />;
};
