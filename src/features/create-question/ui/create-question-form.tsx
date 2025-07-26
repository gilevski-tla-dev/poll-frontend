import { Checkbox, DropdownList, Input } from "@/shared/ui";
import styles from "./create-question-form.module.scss";

const options = [
  "Текстовое поле",
  "С одним вариантом ответа",
  "С несколькими вариантами ответа",
];

export const CreateQuestionForm = () => {
  return (
    <>
      <Input className={styles.question} placeholder="Введите вопрос" />
      <DropdownList options={options} />
      <h1 className={styles.title}>Список вариантов ответа</h1>
      <div className={styles.answer_list}>
        <div className={styles.answer}>
          <Checkbox className={styles.checkbox} type="checkbox" />
          <Input placeholder="Введите первый вариант" />
        </div>
        <div className={styles.answer}>
          <Checkbox className={styles.checkbox} type="checkbox" />
          <Input placeholder="Введите первый вариант" />
        </div>
        <div className={styles.answer}>
          <Checkbox className={styles.checkbox} type="checkbox" />
          <Input placeholder="Введите первый вариант" />
        </div>
      </div>
    </>
  );
};
