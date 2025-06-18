import { baseURL } from "@/shared/api";

export const getPolls = async () => {
  const response = await baseURL.get(`/user/auth`);
  return response.data;
};
