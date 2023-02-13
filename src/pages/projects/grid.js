import React, { useState } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import snoopy from "../../images/icon.png";

const Intro = styled.section`
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(200px, 1fr));
  grid-template-rows: repeat(12, minmax(200px, 1fr));

  h2 {
    grid-column-start: 3;
    grid-row-start: 4;
  }

  div {
    grid-column-start: 6;
    grid-column-end: 10;
    grid-row-start: 6;
    grid-row-end: 12;

    img {
      height: 100%;
      width: 100%;
    }
  }
`;

const GridPage = () => {
  return (
    <Layout>
      <Intro>
        <h1>Holder</h1>
      </Intro>
      <Grid>
        <h2>See the grid</h2>
        <div>
          <img src={snoopy} alt="icon" />
        </div>

        <p>Look at it</p>
      </Grid>
    </Layout>
  );
};

export default GridPage;
