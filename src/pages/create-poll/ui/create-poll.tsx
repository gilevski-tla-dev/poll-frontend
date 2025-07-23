import { FullScreenLayout } from "@/shared/ui";
import styles from "./create-poll.module.scss";
import { CreatePollForm } from "@/features/create-poll";

export const CreatePoll = () => {
  return (
    <FullScreenLayout>
      <h1 className={styles.title}>Создание опроса</h1>

      <CreatePollForm />
    </FullScreenLayout>
  );
};
