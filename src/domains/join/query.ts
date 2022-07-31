import { useMutation } from "@tanstack/react-query";
import { addUser } from "@/src/domains/join/axios";

export function useAddUserMutation() {
  return useMutation(addUser);
}
