import { Pollik } from "@/shared/ui";
import image from "@/shared/assets/pollik.svg";
import styles from "./loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <Pollik image={image} />
      <div className={styles.info}>
        <p>Pollik грузится!</p>
        <p>Нужно немного подождать...</p>
      </div>
    </div>
  );
};
