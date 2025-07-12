import { useEffect, useState, type CSSProperties, type FC } from "react";
import { useNotificationStore } from "../model/store";
import styles from "./Notification.module.scss";
import { clsx } from "clsx";

export const Notifications: FC = () => {
  const { notifications, dismissNotification } = useNotificationStore();
  const [exitingIds, setExitingIds] = useState<string[]>([]);

  useEffect(() => {
    const timeouts = notifications.map((n) => {
      if (!n.duration) return;

      return setTimeout(() => {
        setExitingIds((prev) => [...prev, n.id]);
        setTimeout(() => dismissNotification(n.id), 300);
      }, n.duration);
    });

    return () =>
      timeouts.forEach((timeout) => timeout && clearTimeout(timeout));
  }, [notifications, dismissNotification]);

  const handleDismiss = (id: string) => {
    setExitingIds((prev) => [...prev, id]);
    setTimeout(() => dismissNotification(id), 300);
  };

  if (!notifications.length) return null;

  return (
    <div className={styles.notifications_container}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={clsx(
            styles.notification,
            styles[notification.type],
            exitingIds.includes(notification.id) && styles.slide_out
          )}
          onClick={() => handleDismiss(notification.id)}
          style={
            {
              "--duration": `${notification.duration}ms`,
            } as CSSProperties
          }
        >
          <h4>{notification.title}</h4>
          <div className={styles.progress_bar} />
        </div>
      ))}
    </div>
  );
};
