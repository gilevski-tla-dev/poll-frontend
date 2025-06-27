import { z } from "zod";

export const createPollSchema = z.object({
  title: z.string().min(1, "Введите название опроса"),
  description: z.string().min(1, "Введите описание опроса"),
  image: z.any().refine((file) => file instanceof File || file === null, {
    message: "Некорректный файл",
  }),
});

export type CreatePollFormData = z.infer<typeof createPollSchema>;
