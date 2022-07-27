import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useRef } from "react";
import Layout from "@/src/domains/common/components/Layout";
import "@/styles/globals.css";
import { IPageLayout } from "@/src/domains/common/types";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient()).current;
  const { layout } = pageProps;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout {...(layout as IPageLayout)}>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
