import { MainLayout } from "@/shared/ui";
import styles from "./home.module.scss";
import { PollCard } from "@/entities/poll";
import { useEffect } from "react";

const Home = () => {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    console.log(tg.initData);
  }, []);

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
