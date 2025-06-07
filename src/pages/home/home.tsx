import { MainLayout } from "@/shared/ui";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <MainLayout>
      <h1 className={styles.title}>Опросы</h1>
    </MainLayout>
  );
};

export default Home;
