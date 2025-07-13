import { useMutation } from "@tanstack/react-query";
import { postPoll } from "../api/post-poll";

export const useCreatePoll = () => {
  return useMutation({
    mutationFn: postPoll,
  });
};
