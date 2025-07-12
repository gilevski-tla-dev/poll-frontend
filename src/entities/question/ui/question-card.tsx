import styles from "./question-card.module.scss";
import burger from "@/shared/assets/burger.svg";

export const QuestionCard = () => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>Какой твой любимый цвет?</p>

      <div className={styles.dnd_button}>
        <img src={burger} alt="=" />
      </div>
    </div>
  );
};
