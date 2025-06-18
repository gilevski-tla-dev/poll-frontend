import { api } from "@/shared/api";

export const getPolls = async () => {
  const response = await api.get(`/user`);
  return response.data;
};
