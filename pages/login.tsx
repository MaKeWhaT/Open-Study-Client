import { NextPage } from "next";
import { IPageLayout } from "@/src/domains/common/types";

const Login: NextPage = () => {
  return <div>Login</div>;
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
