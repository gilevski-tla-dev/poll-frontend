import { z } from "zod";

export const createPollSchema = z.object({
  title: z.string().min(3, "Введите название опроса"),
  description: z.string().min(5, "Введите описание опроса"),
  image: z.any().refine((file) => file instanceof File || file === null, {
    message: "Некорректный файл",
  }),
});

export type CreatePollFormData = z.infer<typeof createPollSchema>;
