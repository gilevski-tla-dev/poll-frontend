import { Button, FullScreenLayout } from "@/shared/ui";
import styles from "./question-list.module.scss";
import { DragableQuestionList } from "@/features/dnd-question-list";
import { useGetQuestionsByPoll } from "@/entities/question/hooks/use-get-questions-by-poll";
import { useNavigate, useParams } from "react-router-dom";

export const QuestionList = () => {
  const { pollId } = useParams<{ pollId: string }>();
  const navigate = useNavigate();

  if (!pollId) {
    throw new Error("Poll ID is missing in the URL");
  }

  const { data, isLoading, error } = useGetQuestionsByPoll(pollId);

  if (error) return <FullScreenLayout>Произошла ошибка</FullScreenLayout>;

  if (isLoading) {
    return (
      <FullScreenLayout>
        <DragableQuestionList questions={[]} isLoading={true} />
      </FullScreenLayout>
    );
  }

  return (
    <FullScreenLayout>
      <h1 className={styles.title}>Список вопросов</h1>
      {data && data.length > 0 ? (
        <DragableQuestionList questions={data} isLoading={isLoading} />
      ) : (
        <div className={styles.no_questions}>
          Вопросов пока нет. Если хотите добавить вопрос нажмите на +
        </div>
      )}

      <div className={styles.buttons}>
        <Button
          variant="secondary"
          className={styles.add_button}
          onClick={() => navigate(`/question-list/${pollId}/question`)}
        >
          +
        </Button>
        <Button>Создать опрос</Button>
      </div>
    </FullScreenLayout>
  );
};
