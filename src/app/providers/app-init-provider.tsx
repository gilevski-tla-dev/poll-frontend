import { postAuth } from "@/entities/auth/api/post-auth";
import { useAuthStore } from "@/entities/auth/model/store";
import { useEffect, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AppInitProvider = ({ children }: Props) => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const clearAccessToken = useAuthStore((state) => state.clearAccessToken);
  const initData = window.Telegram?.WebApp?.initData;

  useEffect(() => {
    // fetch("http://localhost:3000/auth");
    postAuth({ initData })
      .then((response) => {
        setAccessToken(response.access_token);
      })
      .catch(() => {
        clearAccessToken();
      });

    // return () => {
    //   clearAccessToken();
    // };

    // TODO Здесь будет происходить то что нужно при инициализации приложения
  }, [clearAccessToken, initData, setAccessToken]);

  return <>{children}</>;
};
