import { api } from "@/shared/api/instance";

export interface AuthParams {
  initData: string;
}

export interface AuthResponse {
  access_token: string;
}

export const postAuth = async ({
  initData,
}: AuthParams): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth", { initData });
  return response.data;
};
