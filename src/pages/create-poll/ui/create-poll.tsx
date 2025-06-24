import { Button, FullScreenLayout, Input } from "@/shared/ui";
import styles from "./create-poll.module.scss";

const CreatePoll = () => {
  return (
    <FullScreenLayout>
      <h1 className={styles.title}>Создание опроса</h1>
      <Input placeholder="Название" />
      <Button variant="danger">Создать</Button>
    </FullScreenLayout>
  );
};

export default CreatePoll;
