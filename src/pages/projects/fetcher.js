import React from "react";
import DataFetcher from "../../components/DataFetcher";
import Layout from "../../components/Layout";
import styled from "styled-components";

const Fetcher = () => {
  const FetcherStyles = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
  `;
  return (
    <Layout>
      <FetcherStyles>
        <h1>FETCHER</h1>
        <DataFetcher />
      </FetcherStyles>
    </Layout>
  );
};

export default Fetcher;
