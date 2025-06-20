import { api } from "../instance";

export const initErrorInterceptor = () => {
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 404) {
        console.error("Ресурс не найден");
      } else if (error.response?.status >= 500) {
        console.error("Ошибка сервера");
      }
      return Promise.reject(error);
    }
  );
};
