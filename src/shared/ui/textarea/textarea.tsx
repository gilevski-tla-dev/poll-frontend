import {
  useRef,
  useEffect,
  useCallback,
  type TextareaHTMLAttributes,
  forwardRef,
} from "react";
import { clsx } from "clsx";
import styles from "./textarea.module.scss";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
  error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, error, ...props }, ref) => {
    const internalRef = useRef<HTMLTextAreaElement>(null);

    const resizeTextarea = useCallback(() => {
      const el = internalRef.current;
      if (el) {
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
      }
    }, []);

    useEffect(() => {
      resizeTextarea();
    }, [resizeTextarea]);

    return (
      <div className={styles.wrapper}>
        <textarea
          {...props}
          ref={(node) => {
            internalRef.current = node;

            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          onInput={(e) => {
            resizeTextarea();
            props.onInput?.(e);
          }}
          className={clsx(styles.textarea, className, error && styles.error)}
        />
      </div>
    );
  }
);
