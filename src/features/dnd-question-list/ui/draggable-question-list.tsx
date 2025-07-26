import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { QuestionCard } from "@/entities/question";
import styles from "./dragable-question-list.module.scss";
import type { Question } from "@/entities/question/types/question";
import Skeleton from "react-loading-skeleton";

type Props = {
  questions: Question[];
  isLoading: boolean;
};

export const DragableQuestionList = ({ questions, isLoading }: Props) => {
  // Обработчик завершения перетаскивания
  const handleDragEnd = () => {};

  if (isLoading) {
    return (
      <Skeleton
        count={10}
        height={60}
        borderRadius={12}
        baseColor="#202020"
        highlightColor="#444"
        style={{ marginBottom: "16px" }}
      />
    );
  }

  if (!questions) {
    return <div>dsad</div>;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="questions">
        {(provided) => (
          <div
            className={styles.container}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {questions.map((question, index) => (
              <Draggable
                key={question.id}
                draggableId={question.id}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <QuestionCard text={question.title} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
