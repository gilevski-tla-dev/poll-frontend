import { postAuth } from "@/entities/auth/api/post-auth";
import { useAuthStore } from "@/entities/auth/model/store";
import { getInitData, isTelegramAvailable } from "@/shared/lib/telegram/webapp";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { initInterceptors } from "@/shared/api/interceptors";

interface Props {
  children: ReactNode;
}

export const AppInitProvider = ({ children }: Props) => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const clearAccessToken = useAuthStore((state) => state.clearAccessToken);
  const navigate = useNavigate();

  useEffect(() => {
    initInterceptors();

    const isAvailable = isTelegramAvailable();

    if (!isAvailable) {
      clearAccessToken();
      // TODO расскоментировать для работы в тг
      // navigate("/not-telegram");
      return;
    }
    const initData = getInitData();
    console.log("initData", initData);

    let isMounted = true;

    const initAuth = async () => {
      if (!initData) {
        clearAccessToken();
        return;
      }

      try {
        const { access_token } = await postAuth({ initData });
        if (isMounted) setAccessToken(access_token);
      } catch (error) {
        console.error("Auth failed", error);
        if (isMounted) clearAccessToken();
      }
    };

    initAuth();

    return () => {
      isMounted = false;
      clearAccessToken();
    };
  }, [clearAccessToken, setAccessToken, navigate]);

  return <>{children}</>;
};
