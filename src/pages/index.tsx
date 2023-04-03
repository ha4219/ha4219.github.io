import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "@/components/Layout";
import ObjectBox from "@/components/ObjectBox";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <div className="text-3xl font-bold">Hello world!</div>
      <ObjectBox />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
