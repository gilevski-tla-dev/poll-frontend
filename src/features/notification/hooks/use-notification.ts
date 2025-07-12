import { useNotificationStore, type NotificationType } from "../model/store";

export const useNotification = () => {
  const { addNotification, dismissNotification } = useNotificationStore();

  const showNotification = (
    type: "info" | "danger" | "success",
    title: string,
    duration?: number
  ) => {
    addNotification({
      type,
      title,
      duration,
    });
  };

  return {
    notify: (title: string, type: NotificationType, duration?: number) =>
      showNotification(type, title, duration),
    dismissNotification,
  };
};
