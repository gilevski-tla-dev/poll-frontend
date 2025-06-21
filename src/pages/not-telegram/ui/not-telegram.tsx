import { Pollik } from "@/shared/ui";
import styles from "./not-telegram.module.scss";
import image from "@/shared/assets/sad-pollik.svg";

export const NotTelegram = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>Pollik работает только</p>
        <p>через Telegram</p>
      </div>
      <Pollik image={image} />
      <button
        onClick={() => window.open("https://t.me/CentrifugeTeam", "_blank")}
        className={styles.button}
      >
        Перейти в Telegram
      </button>
    </div>
  );
};
