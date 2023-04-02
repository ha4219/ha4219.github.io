import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";

const Layout: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title ? title : "jeongdongha.me"}</title>
      </Helmet>
      <div
        style={{ position: "relative", minHeight: "100vh", paddingBottom: "6rem" }}
        className="mx-auto max-w-3xl"
      >
        <Header />
        <div className="container mx-auto pt-10">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
