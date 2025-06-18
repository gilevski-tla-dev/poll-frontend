import { api } from "@/shared/api";

export const getPolls = async () => {
  const response = await api.get(`/poll`);
  return response.data;
};
