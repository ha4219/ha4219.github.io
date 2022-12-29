import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <h1>Hello world!</h1>
      <div className="text-3xl font-bold">Hello world!</div>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
