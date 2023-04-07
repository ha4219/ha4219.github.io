import Layout from "@/components/Layout";
import { PageProps } from "gatsby";
import React from "react";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <span>hello i'm jeongdongha</span>
      </div>
      <div>
        <span>github: </span>
        <a href="https://github.com/ha4219">@ha4219</a>
      </div>
    </Layout>
  );
};

export default AboutPage;
