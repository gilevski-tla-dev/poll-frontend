import { FullScreenLayout } from "@/shared/ui";
import styles from "./create-question.module.scss";
import { CreateQuestionForm } from "@/features/create-question";

export const CreateQuestion = () => {
  return (
    <FullScreenLayout>
      <h1 className={styles.title}>Вопрос 1</h1>
      <CreateQuestionForm />
    </FullScreenLayout>
  );
};
