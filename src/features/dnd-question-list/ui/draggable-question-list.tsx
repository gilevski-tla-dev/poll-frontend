import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { QuestionCard } from "@/entities/question";
import styles from "./dragable-question-list.module.scss";
import type { Question } from "@/entities/question/types/question";

type Props = {
  questions: Question[];
};

export const DragableQuestionList = ({ questions }: Props) => {
  // Обработчик завершения перетаскивания
  const handleDragEnd = () => {};

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
