import { api } from "@/shared/api/instance";

export interface CreatePollFormData {
  title: string;
  description: string;
  image?: File | null;
}

export const postPoll = async (formData: CreatePollFormData) => {
  const data = new FormData();

  data.append("title", formData.title);
  data.append("description", formData.description);

  if (formData.image) {
    data.append("image", formData.image);
  }

  const response = await api.post(`/poll`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
