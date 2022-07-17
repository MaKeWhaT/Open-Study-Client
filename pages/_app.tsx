import type { AppProps } from "next/app";
import { useRef } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Layout from "@/src/domains/common/components/Layout";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient()).current;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
