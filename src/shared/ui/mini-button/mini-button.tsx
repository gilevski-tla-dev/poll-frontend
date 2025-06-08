import styles from "./mini-button.module.scss";

type Props = {
  text: string;
  onClick?: () => void;
};

export const MiniButton = ({ onClick, text }: Props) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};
