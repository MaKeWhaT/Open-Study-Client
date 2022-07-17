import clsx from "clsx";
import { PropsWithChildren } from "react";
import { IPageLayout } from "../../types";
import Header from "@/src/domains/common/components/Header";

export default function Layout({
  header = true,
  children,
}: PropsWithChildren<IPageLayout>) {
  return (
    <>
      {header && <Header />}
      <main
        className={clsx("h-[calc(100vh)] overflow-auto bg-gray-50", {
          "pt-[60px]": header,
        })}
      >
        {children}
      </main>
    </>
  );
}
