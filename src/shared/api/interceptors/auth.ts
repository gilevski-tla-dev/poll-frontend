import { useAuthStore } from "@/entities/auth/model/store";
import { api } from "../instanсe";

export const initAuthInterceptor = () => {
  // Request interceptor - добавляет токен к запросам
  api.interceptors.request.use((config) => {
    const { accessToken } = useAuthStore.getState();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  // TODO Response interceptor - обновляет токен при 401 ошибке
};
