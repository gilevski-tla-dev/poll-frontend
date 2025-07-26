import { Button, FullScreenLayout } from "@/shared/ui";
import styles from "./question-list.module.scss";
import { DragableQuestionList } from "@/features/dnd-question-list";
import { useGetQuestionsByPoll } from "@/entities/question/hooks/use-get-questions-by-poll";
import { useParams } from "react-router-dom";

export const QuestionList = () => {
  const { pollId } = useParams<{ pollId: string }>();

  if (!pollId) {
    throw new Error("Poll ID is missing in the URL");
  }

  const { data, isLoading, error } = useGetQuestionsByPoll(pollId);

  if (error) return <h1>321</h1>;
  if (!data) return <h1>321</h1>;

  // const is = true
  return (
    <FullScreenLayout>
      <h1 className={styles.title}>Список вопросов</h1>
      <DragableQuestionList questions={data} isLoading={isLoading} />
      <div className={styles.buttons}>
        <Button variant="secondary" className={styles.add_button}>
          +
        </Button>
        <Button>Создать опрос</Button>
      </div>
    </FullScreenLayout>
  );
};
