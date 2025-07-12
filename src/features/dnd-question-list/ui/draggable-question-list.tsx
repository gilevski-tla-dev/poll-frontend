import { QuestionCard } from "@/entities/question";
import styles from "./dragable-question-list.module.scss";

export const DragableQuestionList = () => {
  return (
    <div className={styles.container}>
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
    </div>
  );
};
