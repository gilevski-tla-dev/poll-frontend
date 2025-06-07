import styles from "./loading.module.scss";
import Pollik from "@/assets/pollik.svg";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pollik_container}>
        <img src={Pollik} alt="Loading" className={styles.pollik} />
        <div className={styles.shadow}></div>
      </div>

      <div className={styles.info}>
        <p>Pollik грузится!</p>
        <p>Нужно немного подождать...</p>
      </div>
    </div>
  );
};

export default Loading;
