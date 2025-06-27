import {
  useRef,
  useEffect,
  useCallback,
  type TextareaHTMLAttributes,
} from "react";
import styles from "./textarea.module.scss";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ ...props }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = useCallback(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto"; // сброс текущей высоты
      el.style.height = `${el.scrollHeight}px`; // установка новой высоты
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
        props.onInput?.(e); // вызвать внешний обработчик, если передан
      }}
      className={styles.textarea}
    />
  );
};
