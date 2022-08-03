import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import Layout from "@/src/domains/common/components/Layout";
import "@/styles/globals.css";
import { ON_DEVELOPMENT } from "@/src/domains/common/constants";
import { DEFAULT_GLOBAL_QUERY_OPTIONS } from "@/src/domains/common/constants/query";
import { IPageLayout } from "@/src/domains/common/types";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(
    new QueryClient(DEFAULT_GLOBAL_QUERY_OPTIONS),
  ).current;
  const { layout } = pageProps;

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={ON_DEVELOPMENT} />
      <Hydrate state={pageProps.dehydratedState}>
        <Layout {...(layout as IPageLayout)}>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
      <Toaster
        containerStyle={{ top: "68px" }}
        position="top-center"
        toastOptions={{ duration: 3000 }}
      />
    </QueryClientProvider>
  );
}

export default MyApp;
