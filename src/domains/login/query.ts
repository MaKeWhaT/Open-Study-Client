import { useMutation } from "@tanstack/react-query";
import { login } from "@/src/domains/login/axios";

export function useLoginUserMutation() {
  return useMutation(login);
}
