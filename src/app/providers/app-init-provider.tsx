import { useAuth } from "@/entities/auth/hooks/use-auth";
import { useAuthStore } from "@/entities/auth/model/store";
import { useEffect, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AppInitProvider = ({ children }: Props) => {
  const accessToken = useAuthStore((state) => state.accessToken);

  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const clearAccessToken = useAuthStore((state) => state.clearAccessToken);
  const initData = window.Telegram?.WebApp?.initData;

  const { data, isSuccess, isError } = useAuth(initData);

  useEffect(() => {
    console.log(initData);
    console.log(accessToken);

    if (isSuccess && data) {
      setAccessToken(data.accessToken);
    }

    if (isError) {
      clearAccessToken();
    }

    return () => {
      clearAccessToken();
    };

    // TODO Здесь будет происходить то что нужно при инициализации приложения
  }, [isSuccess, isError, data]);

  return <>{children}</>;
};
