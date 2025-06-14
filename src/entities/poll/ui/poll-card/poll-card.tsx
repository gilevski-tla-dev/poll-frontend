import { MiniButton } from "@/shared/ui";
import styles from "./poll-card.module.scss";
import { Link } from "react-router-dom";

type Props = {
  onClick?: () => void;
  id: number;
  title: string;
};

export const PollCard = ({ id, title, onClick }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
          alt=""
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.button}>
          <Link to={`/poll/${id}`}>
            <MiniButton text="Пройти" onClick={onClick} />
          </Link>
        </div>
        <p className={styles.count}>7 вопросов</p>
      </div>
    </div>
  );
};
