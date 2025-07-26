  import { api } from "@/shared/api/instance";

  export type CreatePollFormData = {
    title: string;
    description: string;
    image?: File | null;
  };

  export type PollResponse = {
    id: string;
    title: string;
    description: string;
    image: string;
    userId: string;
  };

  export const postPoll = async (
    formData: CreatePollFormData
  ): Promise<PollResponse> => {
    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);

    if (formData.image) {
      data.append("image", formData.image);
    }

    const response = await api.post<PollResponse>(`/poll`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  };
