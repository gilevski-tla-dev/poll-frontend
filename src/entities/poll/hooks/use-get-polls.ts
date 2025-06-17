import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/shared/api/baseURL";

const getPolls = async () => {
  const response = await baseURL.get(`/poll`);
  return response.data;
};

export const useGetPolls = () =>
  useQuery({
    queryKey: ["employees"],
    queryFn: () => getPolls(),
  });
