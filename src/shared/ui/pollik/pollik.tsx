import styles from "./pollik.module.scss";

type Props = {
  image: string;
};

export const Pollik = ({ image }: Props) => {
  return (
    <div className={styles.pollik_container}>
      <img src={image} alt="Loading" className={styles.pollik} />
      <div className={styles.shadow}></div>
    </div>
  );
};
