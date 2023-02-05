import React from "react";
import "../styles/main.scss";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="site__wrapper">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
