import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";
import { QuestionCard } from "@/entities/question";
import styles from "./dragable-question-list.module.scss";

type Question = {
  id: string;
  text: string;
};

export const DragableQuestionList = () => {
  const [questions, setQuestions] = useState<Question[]>([
    { id: "1", text: "Какой твой любимый цвет?" },
    { id: "2", text: "Как тебя зовут?" },
    { id: "3", text: "Сколько тебе лет?" },
    { id: "4", text: "Где ты живешь?" },
  ]);

  // Обработчик завершения перетаскивания
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return; // Если элемент не перемещен в допустимую область

    const newQuestions = [...questions];
    const [removed] = newQuestions.splice(result.source.index, 1);
    newQuestions.splice(result.destination.index, 0, removed);

    setQuestions(newQuestions);
  };

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
                    <QuestionCard text={question.text} />
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
