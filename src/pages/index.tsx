import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "@/components/Header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <h1>Hello world!</h1>
      <div className="font-bold text-3xl">Hello world!</div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
