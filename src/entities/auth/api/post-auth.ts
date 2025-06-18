import { api } from "@/shared/api";

interface AuthParams {
  initData: string;
}

export interface AuthResponse {
  accessToken: string;
}

export const postAuth = async ({
  initData,
}: AuthParams): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth", { initData });
  return response.data;
};
