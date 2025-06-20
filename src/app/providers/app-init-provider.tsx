import { useAuthStore } from "@/entities/auth/model/store";
import axios from "axios";
import { useEffect, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AppInitProvider = ({ children }: Props) => {
  const accessToken = useAuthStore((state) => state.accessToken);

  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const clearAccessToken = useAuthStore((state) => state.clearAccessToken);
  const initData = window.Telegram?.WebApp?.initData;

  useEffect(() => {
    axios
      .post("http://localhost:3000/api/auth", {
        initData,
      })
      .then((response) => {
        setAccessToken(response.data.access_token);
      })
      .catch(() => {
        clearAccessToken();
      });
    console.log("initData: ", initData);
    console.log("accessToken: ", accessToken);

    // return () => {
    //   clearAccessToken();
    // };

    // TODO Здесь будет происходить то что нужно при инициализации приложения
  }, [accessToken, clearAccessToken, initData, setAccessToken]);

  return <>{children}</>;
};
