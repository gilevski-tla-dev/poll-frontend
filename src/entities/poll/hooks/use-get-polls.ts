import { useQuery } from "@tanstack/react-query";
import { getPolls } from "../api/get-polls";

export const useGetPolls = () =>
  useQuery({
    queryKey: ["polls"],
    queryFn: () => getPolls(),
  });
