import { NextPage } from "next";
import { IPageLayout } from "@/src/domains/common/types";
import JoinContainer from "@/src/domains/join/containers";

const Join: NextPage = () => {
  return <JoinContainer />;
};

export async function getStaticProps() {
  const layout: IPageLayout = {
    header: false,
  };
  return {
    props: {
      layout,
    },
  };
}

export default Join;
