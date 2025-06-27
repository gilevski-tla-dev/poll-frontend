import {
  useRef,
  useEffect,
  useCallback,
  type TextareaHTMLAttributes,
} from "react";
import { clsx } from "clsx";
import styles from "./textarea.module.scss";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};

export const Textarea = ({ className, ...props }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = useCallback(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }
  }, []);

  useEffect(() => {
    resizeTextarea();
  }, [resizeTextarea]);

  return (
    <textarea
      {...props}
      ref={textareaRef}
      onInput={(e) => {
        resizeTextarea();
        props.onInput?.(e);
      }}
      className={clsx(styles.textarea, className)}
    />
  );
};
