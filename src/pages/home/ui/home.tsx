import { MainLayout } from "@/shared/ui";
import styles from "./home.module.scss";
import { PollCard } from "@/entities/poll";

const Home = () => {
  return (
    <MainLayout>
      <h1 className={styles.title}>Опросы</h1>

      <div className={styles.list}>
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
        <PollCard />
      </div>
    </MainLayout>
  );
};

export default Home;
