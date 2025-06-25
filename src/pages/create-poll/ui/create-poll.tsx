import { Button, FullScreenLayout, Input, Textarea } from "@/shared/ui";
import styles from "./create-poll.module.scss";

const CreatePoll = () => {
  return (
    <FullScreenLayout>
      <h1 className={styles.title}>Создание опроса</h1>
      <Input placeholder="Название" />
      <Textarea placeholder="Описание" />
      <Button variant="secondary">Загрузить фото</Button>
    </FullScreenLayout>
  );
};

export default CreatePoll;
