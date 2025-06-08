import { MiniButton } from "@/shared/ui";
import styles from "./poll-card.module.scss";

type Props = {
  onClick?: () => void;
};

export const PollCard = ({ onClick }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
          alt=""
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>Анкета для исследования рынка</h1>
        <div className={styles.button}>
          <MiniButton text="Пройти" onClick={onClick} />
        </div>
        <p className={styles.count}>7 вопросов</p>
      </div>
    </div>
  );
};
