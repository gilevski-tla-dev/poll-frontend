import { Button, Checkbox, DropdownList, Input } from "@/shared/ui";

import styles from "./create-question-form.module.scss";

import { useState } from "react";

const QUESTION_TYPES = {
  TEXT: "Текстовое поле",

  SINGLE_CHOICE: "С одним вариантом ответа",

  MULTIPLE_CHOICE: "С несколькими вариантами ответа",
} as const;

const INITIAL_ANSWERS = ["", ""];

export const CreateQuestionForm = () => {
  const [selectedType, setSelectedType] = useState("");

  const [answers, setAnswers] = useState<string[]>(INITIAL_ANSWERS);

  const [questionText, setQuestionText] = useState("");

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);

    resetAnswers();
  };

  const resetAnswers = () => setAnswers(INITIAL_ANSWERS);

  const addEmptyAnswer = () => {
    setAnswers((prev) => [...prev, ""]);
  };

  const updateAnswer = (index: number, value: string) => {
    setAnswers((prev) =>
      prev.map((answer, i) => (i === index ? value : answer))
    );
  };

  const renderTextInputForm = () => (
    <>
      <h1 className={styles.title}>Введите ответ</h1>

      <div className={styles.answer}>
        <Input placeholder="Ответ" />

        <Button variant="disabled">Создать вопрос</Button>
      </div>
    </>
  );

  const renderAnswerInput = (answer: string, index: number) => (
    <div className={styles.answer} key={index}>
      <Checkbox
        className={styles.checkbox}
        type={
          selectedType === QUESTION_TYPES.SINGLE_CHOICE ? "radio" : "checkbox"
        }
      />

      <Input
        placeholder={`Введите вариант ${index + 1}`}
        value={answer}
        onChange={(e) => updateAnswer(index, e.target.value)}
      />
    </div>
  );

  const renderChoiceForm = () => (
    <>
      <h1 className={styles.title}>Список вариантов ответа</h1>

      <div className={styles.answer_list}>
        {answers.map(renderAnswerInput)}

        <div className={styles.edit_buttons}>
          <Button variant="secondary">Редактировать</Button>

          <Button onClick={addEmptyAnswer}>Добавить ответ</Button>
        </div>

        <Button variant="disabled">Создать вопрос</Button>
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      <Input
        className={styles.question}
        placeholder="Введите вопрос"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />

      <DropdownList
        options={Object.values(QUESTION_TYPES)}
        onSelect={handleTypeSelect}
      />

      {selectedType === QUESTION_TYPES.TEXT
        ? renderTextInputForm()
        : selectedType && renderChoiceForm()}
    </div>
  );
};
