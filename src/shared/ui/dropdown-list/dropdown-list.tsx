import { useState } from "react";
import styles from "./dropdown-list.module.scss";
import Arrow from "@/shared/assets/arrow.svg";
import clsx from "clsx";

type Props = {
  options: string[];
};

export const DropdownList = ({ options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.header} onClick={toggleDropdown}>
        {selected || "Выберите тип ответа"}
        <img
          src={Arrow}
          alt="arrow"
          className={clsx(styles.arrow, {
            [styles.up]: isOpen,
            [styles.down]: !isOpen,
          })}
        />
      </div>
      <ul
        className={clsx(styles.list, {
          [styles.open]: isOpen,
          [styles.closed]: !isOpen,
        })}
      >
        {options.map((option, index) => (
          <div key={index}>
            <li className={styles.item} onClick={() => handleSelect(option)}>
              {option}
            </li>
            {index < options.length - 1 && <li className={styles.separator} />}
          </div>
        ))}
      </ul>
    </div>
  );
};
