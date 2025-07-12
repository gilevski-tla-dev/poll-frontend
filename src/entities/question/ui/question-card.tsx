import styles from "./question-card.module.scss";
import burger from "@/shared/assets/burger.svg";

interface QuestionCardProps {
  text: string;
}

export const QuestionCard = ({ text }: QuestionCardProps) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{text}</p>
      <div className={styles.dnd_button}>
        <img src={burger} alt="≡" />
      </div>
    </div>
  );
};
