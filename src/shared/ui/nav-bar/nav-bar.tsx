import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./nav-bar.module.scss";

export type NavItem = {
  icon: string;
  text: string;
  route: string;
};

type Props = {
  items: NavItem[];
};

export const NavBar = ({ items }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = items.findIndex((item) => {
      if (item.route === "/") {
        return currentPath === "/";
      }
      return currentPath.startsWith(item.route);
    });
    setSelectedIndex(activeIndex >= 0 ? activeIndex : null);
  }, [location.pathname, items]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    navigate(items[index].route);
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.elem} ${
            selectedIndex === index ? styles.selected : ""
          }`}
          onClick={() => handleSelect(index)}
        >
          <img src={item.icon} alt={item.text} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
