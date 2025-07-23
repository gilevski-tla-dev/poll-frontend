import { useQuery } from "@tanstack/react-query";
import { GetQuestionsByPoll } from "../api/get-questions-by-poll";

export const useGetQuestionsByPoll = (id: string) => {
  return useQuery({
    queryKey: ["questionsByPoll", id],
    queryFn: () => GetQuestionsByPoll(id),
    enabled: !!id,
  });
};
