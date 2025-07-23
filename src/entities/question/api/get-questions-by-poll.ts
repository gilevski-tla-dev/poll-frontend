import { api } from "@/shared/api/instance";
import type { Question } from "../types/question";

export const GetQuestionsByPoll = async (id: string): Promise<Question[]> => {
  const response = await api.get<Question[]>(`/poll/${id}/question`);
  return response.data;
};
