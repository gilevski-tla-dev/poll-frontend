import { isTelegramAvailable } from "@/shared/lib/telegram/webapp";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { initInterceptors } from "@/shared/api/interceptors";

interface Props {
  children: ReactNode;
}

export const AppInitProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    initInterceptors();

    const isAvailable = isTelegramAvailable();

    if (!isAvailable) {
      // TODO расскоментировать для работы в тг
      // navigate("/not-telegram");
    }
  }, [navigate]);

  return <>{children}</>;
};
