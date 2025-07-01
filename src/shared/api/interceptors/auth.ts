import { api } from "../instance";

export const initAuthInterceptor = () => {
  // Request interceptor - добавляет токен к запросам
  api.interceptors.request.use((config) => {
    const authData = localStorage.getItem("auth");
    const accessToken = authData
      ? JSON.parse(authData).state.accessToken
      : null;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  // TODO Response interceptor - обновляет токен при 401 ошибке
};
