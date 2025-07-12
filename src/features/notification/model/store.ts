import { create } from "zustand";

export type NotificationType = "info" | "danger" | "success";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  duration?: number;
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, "id">) => void;
  dismissNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],

  addNotification: (notification) =>
    set((state) => {
      //  уведомлений до 3

      const notifications = [...state.notifications];
      if (notifications.length >= 3) {
        notifications.shift();
      }

      return {
        notifications: [
          ...notifications,
          {
            ...notification,
            id: Math.random().toString(36).substring(2, 9),
            duration: notification.duration || 2000,
          },
        ],
      };
    }),

  dismissNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));
