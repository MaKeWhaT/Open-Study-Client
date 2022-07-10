import { PropsWithChildren } from "react";
import Header from "@/src/domains/common/components/Header";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <main className="mt-[60px] h-[calc(100vh-60px)] overflow-auto bg-gray-50">
        {children}
      </main>
    </>
  );
}
