import { useAuthStore } from "@/entities/auth/model/store";
import { useEffect, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AppInitProvider = ({ children }: Props) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const clearAccessToken = useAuthStore((state) => state.clearAccessToken);

  useEffect(() => {
    console.log(accessToken);

    setAccessToken("my_token_123");

    return () => {
      clearAccessToken();
    };

    // TODO Здесь будет происходить то что нужно при инициализации приложения
  }, [setAccessToken, accessToken, clearAccessToken]);

  return <>{children}</>;
};
