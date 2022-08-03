import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/src/domains/common/apis/axios";

export function useMeQuery() {
  return useQuery(["me"], getMe);
}
