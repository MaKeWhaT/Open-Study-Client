import type { QueryClientConfig } from "@tanstack/query-core";
import { ON_PRODUCTION } from "@/src/domains/common/constants";

export const DEFAULT_GLOBAL_QUERY_OPTIONS: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: Infinity, // 데이터는 절대 썪지 않으며 메뉴얼 Query Invalidation이 없다면 이전에 쿼리한 데이터를 재사용한다.
      cacheTime: 0, // 데이터가 절대 썪지 않기 때문에 cacheTime이 작용하여 동작하는 케이스가 발생하지 않는다.
      refetchOnWindowFocus: ON_PRODUCTION,
      keepPreviousData: true,
      retry: 3,
    },
  },
};
