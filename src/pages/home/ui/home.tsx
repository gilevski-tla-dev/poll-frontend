import { MainLayout } from "@/shared/ui";
import styles from "./home.module.scss";
import { PollCard } from "@/entities/poll";
import { useGetPolls } from "@/entities/poll/hooks/use-get-polls";
import { type Poll } from "@/entities/poll/model/store";

export const Home = () => {
  const { isLoading, data } = useGetPolls();

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
    </>
  );
};
