import { useEffect } from "react";
import { checkAuth } from "@/src/domains/common/apis/axios";

export default function useCheckAuth() {
  useEffect(() => {
    checkAuth();
  });
}
