import { MainLayout, NavBar } from "@/shared/ui";
import styles from "./home.module.scss";
import { PollCard } from "@/entities/poll";
import { useEffect } from "react";
import { useGetPolls } from "@/entities/poll/hooks/use-get-polls";
import { type Poll } from "@/entities/poll/model/store";

const Home = () => {
  const tg = window.Telegram.WebApp;

  const { isLoading, data } = useGetPolls();
  useEffect(() => {
    console.log(tg.initData);
  }, []);
  console.log(isLoading);
  return (
    <>
      <MainLayout>
        <h1 className={styles.title}>Опросы</h1>

        <div className={styles.list}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.map((obj: Poll) => (
              <PollCard key={obj.id} id={obj.id} title={obj.title} />
            ))
          )}
        </div>
      </MainLayout>
      <NavBar />
    </>
  );
};

export default Home;
