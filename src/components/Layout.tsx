import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", paddingBottom: "6rem" }}>
      <Header />
      <div className="px-10 pt-10 sm:px-24">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
