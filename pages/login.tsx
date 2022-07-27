import { NextPage } from "next";
import { IPageLayout } from "@/src/domains/common/types";
import LoginContainier from "@/src/domains/login/containers";

const Login: NextPage = () => {
  return <LoginContainier />;
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

export default Login;
