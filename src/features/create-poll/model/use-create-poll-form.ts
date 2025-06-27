import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPollSchema, type CreatePollFormData } from "./schema";

export const useCreatePollForm = () => {
  return useForm<CreatePollFormData>({
    resolver: zodResolver(createPollSchema),
    defaultValues: {
      title: "",
      description: "",
      image: null,
    },
  });
};
