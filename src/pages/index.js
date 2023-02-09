import React from "react";
import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import "../styles/main.scss";
import gsap from "gsap";
import styled from "styled-components";

const IndexPage = () => {
  const [again, setAgain] = useState(false);
  const timeline = gsap.timeline({ ease: "power2.out" });
  const homeRef = useRef(null);
  const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 4rem;
    height: calc(100vh - 160px);

    section.hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }

    h1 {
      font-size: 5rem;
    }

    button {
      width: fit-content;
      background-color: none;
      cursor: pointer;
    }
  `;

  useEffect(() => {
    let ctx = gsap.context(() => {
      timeline
        .fromTo(
          "h1",
          {
            xPercent: -100,
            autoAlpha: 0,
          },
          {
            duration: 1.2,
            xPercent: 0,
            autoAlpha: 1,
          }
        )
        .fromTo(
          "section ul li",
          {
            x: -40,
            autoAlpha: 0,
          },
          { stagger: 0.2, duration: 0.6, x: 0, autoAlpha: 1 }
        );
    }, homeRef);
    return () => ctx.revert;
  }, [again]);

  return (
    <Layout>
      {/* <Loader /> */}
      <HomeWrapper ref={homeRef}>
        <section className="hero">
          <h1>PLAYGROUND</h1>
          <ul>
            <li>This</li>
            <li>Is</li>
            <li>A</li>
            <li>Test</li>
          </ul>
          <button onClick={() => setAgain((again) => !again)}>Again</button>
        </section>
      </HomeWrapper>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
