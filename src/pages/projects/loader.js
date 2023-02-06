import React, { useState } from "react";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader/Loader";
import styled from "styled-components";

const LoaderPage = () => {
  const [again, setAgain] = useState(false);

  const LoaderStyles = styled.section`
    height: calc(100vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  `;
  return (
    <Layout>
      <LoaderStyles>
        <Loader again={again} />
        <h1>Loader</h1>
        <button onClick={() => setAgain((again) => !again)}>Again</button>
      </LoaderStyles>
    </Layout>
  );
};

export default LoaderPage;
