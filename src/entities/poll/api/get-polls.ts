import { api } from "@/shared/api/instance";

export const getPolls = async () => {
  const response = await api.get(`/poll`);
  return response.data;
};
