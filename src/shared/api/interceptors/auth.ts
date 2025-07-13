import { api } from "../instance";
import { postAuth } from "@/entities/auth/api/post-auth";
import { useAuthStore } from "@/entities/auth/model/store";
import { getInitData } from "@/shared/lib/telegram/webapp";

// Интерфейс для определения структуры промисов, ожидающих в очереди
interface FailedRequest {
  resolve: (token: string) => void;
  reject: (error: Error) => void;
}

let isRefreshing = false;
// Очередь теперь будет хранить объекты с функциями resolve и reject
let failedQueue: FailedRequest[] = [];

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else if (token) {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

export const initAuthInterceptor = () => {
  // 1. Перехватчик запросов
  api.interceptors.request.use(
    (config) => {
      const accessToken = useAuthStore.getState().accessToken;
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // 2. Перехватчик ответов
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          // Если обновление уже выполняется, добавляем резолвер нового промиса в очередь
          return new Promise((resolve, reject) => {
            failedQueue.push({
              resolve: (token: string) => {
                originalRequest.headers.Authorization = "Bearer " + token;
                resolve(api(originalRequest));
              },
              reject: (err: Error) => {
                reject(err);
              },
            });
          });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const initData = getInitData();
          if (!initData) {
            useAuthStore.getState().clearAccessToken();
            const authError = new Error(
              "Telegram initData недоступен для аутентификации."
            );
            processQueue(authError, null);
            return Promise.reject(authError);
          }

          const { access_token } = await postAuth({ initData });
          useAuthStore.getState().setAccessToken(access_token);

          // Примечание: Нет необходимости устанавливать api.defaults.headers здесь,
          // так как перехватчик запросов обрабатывает это
          originalRequest.headers.Authorization = `Bearer ${access_token}`;

          processQueue(null, access_token);

          return api(originalRequest);
        } catch (authError) {
          useAuthStore.getState().clearAccessToken();

          // FIX: Обработка типа 'unknown' в блоке catch
          const errorToPropagate =
            authError instanceof Error
              ? authError
              : new Error("Произошла неизвестная ошибка аутентификации");
          processQueue(errorToPropagate, null);

          console.error("Ошибка обновления аутентификации", authError);
          return Promise.reject(errorToPropagate);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );
};

/*
Дока к работе кода
https://docs.google.com/document/d/1QnwYBmuabqCAY_VJpeCVDKeNpAFf12sOjDxnRiXO2rE/edit?usp=sharing
*/
