import React, { useState } from "react";
import styles from "./checkbox.module.scss";
import Check from "@/shared/assets/check.svg";
import clsx from "clsx";

interface Props {
  type: "checkbox" | "radio";
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox = ({
  type,
  checked = false,
  onChange,
  className,
}: Props) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      className={clsx(
        styles.checkboxBase,
        className,
        type === "radio" ? styles.radio : styles.box,
        isChecked && styles.checked
      )}
      onClick={handleClick}
    >
      {isChecked && <img src={Check} alt="arrow" />}
    </div>
  );
};
