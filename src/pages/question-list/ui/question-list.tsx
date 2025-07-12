import { FullScreenLayout } from "@/shared/ui";
import styles from "./question-list.module.scss";
import { DragableQuestionList } from "@/features/dnd-question-list";

const QuestionList = () => {
  return (
    <FullScreenLayout>
      <h1 className={styles.title}>Список вопросов</h1>
      <DragableQuestionList />
    </FullScreenLayout>
  );
};

export default QuestionList;
