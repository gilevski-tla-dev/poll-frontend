import { useEffect, useState } from "react";
import styles from "./nav-bar.module.scss";

export const NavBar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + 10) {
        setHidden(true); // Прокрутка вниз
      } else if (currentScrollY < lastScrollY - 10) {
        setHidden(false); // Прокрутка вверх
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`${styles.container} ${hidden ? styles.hidden : ""}`}>
      NavBar
    </div>
  );
};
