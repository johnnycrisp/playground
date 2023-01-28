import React from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader/Loader";
import "../styles/main.scss";

const IndexPage = () => {
  return (
    <Layout>
      <Loader />
      <div className="home__content">
        <h1>PLAYGROUND</h1>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
