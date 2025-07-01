import { create } from "zustand";

export type NotificationType = "success" | "error" | "info";

export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

interface NotificationState {
  notifications: Notification[];
  addNotification: (message: string, type: NotificationType) => void;
  removeNotification: (id: number) => void;
}

export const useNotificationStore = create<NotificationState>((set, get) => ({
  notifications: [],

  addNotification: (message, type) => {
    const id = Date.now();

    set((state) => ({
      notifications: [...state.notifications, { id, message, type }],
    }));

    setTimeout(() => {
      get().removeNotification(id);
    }, 2000);
  },

  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  },
}));
