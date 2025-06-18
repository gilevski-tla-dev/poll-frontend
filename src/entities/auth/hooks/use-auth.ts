import { useQuery } from "@tanstack/react-query";
import { postAuth } from "../api/post-auth";

export const useAuth = (initData: string) => {
  return useQuery({
    queryKey: ["auth", initData],
    queryFn: () => postAuth({ initData }),
    enabled: !!initData,
  });
};
